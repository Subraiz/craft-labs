// Handle all logic for routes and renders relating to the CMS
const shell = require("shelljs");
const axios = require("axios");
const Website = require("../../../models/websiteModel");
const User = require("../../../models/userModel");

// Render website manager
module.exports.renderWebsiteManger = (req, res) => {
  Website.find({ userID: req.params.user_id }, function(err, websites) {
    if (err) {
      return res.status(404).send({
        success: false,
        message: "Error: Server Error"
      });
    } else {
      User.findById(websites[0].userID, function(err, user) {
        if (err) {
          return res.status(500).send({ error: "Server Error" });
        } else {
          return res.render("websiteManager", {
            layout: false,
            websites,
            user
          });
        }
      });
    }
  });
};

// Render website page
module.exports.renderPage = (req, res, page) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      res.status(500).json({ error: "Server Error" });
    } else {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        User.findById(website.userID, function(err, user) {
          let websiteConfiguration = Object.assign({}, website)._doc;
          // Set the current page as true so handlebars can give it proper styling
          websiteConfiguration.page = page;

          // Pass in user email and website ID for handlebars usage
          websiteConfiguration = {
            ...websiteConfiguration,
            websiteID: req.params.website_id,
            email: user.email
          };

          return res.render(page, {
            ...websiteConfiguration,
            layout: "base"
          });
        });
      }
    }
  });
};

// Update website property
module.exports.updateWebsiteProperty = (req, res, websiteID) => {
  Website.findOne({ _id: websiteID }, function(err, website) {
    if (err) {
      return res.status(500);
    } else if (!website) {
      return re.status(400).json({ error: "Website Not Found" });
    } else {
      set(req.body.prop, req.body.value, website);
      website.save(function(err, updatedWebsite) {
        if (err) {
          return res.status(500).send({ err: err });
        } else {
          return res.status(200).send();
        }
      });
    }
  });
};

// Publish the website to update any changes in database
module.exports.publishWebsite = (req, res, websiteID) => {
  Website.findById(websiteID, function(err, website) {
    // Set website status to building to update front end UI
    setWebsiteStatus(website, "Building");

    // Clean up website title to remove all spaces and dashes
    let websiteMinifiedTitle = minifyTitle(website.title);

    // Go to where the build script is located
    shell.cd(process.env.BUILD_SCRIPT_DIRECTORY);

    // Run gatsby build command to generate static files
    shell.exec(
      `${process.env.BUILD_SCRIPT} ${req.params.website_id} ${
        process.env.OUTPUT_DIRECTORY
      } ${websiteMinifiedTitle}`,
      {
        async: true,
        silent: false
      },
      () => {
        // Once website is built set the status back to live
        setWebsiteStatus(website, "Live");

        // This part should only be done on testing or production server not locally
        if (process.env.ENV != "Development" && !website.isPublished) {
          // Configure .conf file for apache
          shell.exec(
            `cd /var/www && sudo ./server-configure -u ${websiteMinifiedTitle} -d builds/${websiteMinifiedTitle}`,
            {
              async: true,
              silent: false
            }
          );

          // Register CNAME on GoDaddy for free domain (website.craftlabs.com)
          axios
            .patch(
              `https://api.godaddy.com/v1/domains/splurgedev.com/records`,
              [
                {
                  type: "A",
                  name: `${websiteMinifiedTitle}`,
                  data: "34.236.22.80"
                }
              ],
              {
                headers: {
                  Authorization: `sso-key ${process.env.GO_DADDY_API_KEY}:${
                    process.env.GO_DADDY_SECRET
                  }`,
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
              }
            )
            .then(res => {
              set("isPublished", true, website);
              website.save();
            })
            .catch(err => {
              set("isPublished", true, website);
              website.save();
              throw err;
            });
        }
      }
    );
  });
  return res.status(200).send();
};

/************ Helper Functions for Publishing Website ************/
function minifyTitle(str) {
  return str
    .replace(/\s+/g, "")
    .replace(/[^A-Za-z0-9\s]/g, "")
    .replace(/\s{2,}/g, " ")
    .toLowerCase();
}

function setWebsiteStatus(website, status) {
  set("status", status, website);
  website.save();
}

function set(path, value, obj) {
  var schema = obj; // a moving reference to internal objects within obj
  var pList = path.split(".");
  var len = pList.length;
  for (var i = 0; i < len - 1; i++) {
    var elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
}
