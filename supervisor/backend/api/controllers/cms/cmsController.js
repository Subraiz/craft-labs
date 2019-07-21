// Handle all logic for routes and renders relating to the CMS
let handlebarsController = module.exports;
const Website = require("../../../models/websiteModel");
const User = require("../../../models/userModel");
const shell = require("shelljs");

// Render website manager
module.exports.renderWebsiteManger = (req, res) => {
  Website.find({ userID: req.params.user_id }, function(err, websites) {
    if (err) {
      return res.status(404).send({
        success: false,
        message: "Error: Server Error"
      });
    } else {
      // If user has more than one site redirect to select website page
      if (websites.length > 1) {
        return res.render("websiteManager", { layout: false, websites });
      } else {
        // Otherwise go to CMS dashboard for website
        res.redirect(`/cms/${websites[0]._id}`);
      }
    }
  });
};

// Render dashboard for CMS
module.exports.renderDashboard = (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      res.status(500).json({ error: "Server Error" });
    } else {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        // Get user email and information
        User.findById(website.userID, function(err, user) {
          let websiteConfiguration = Object.assign({}, website)._doc;
          websiteConfiguration = {
            ...websiteConfiguration,
            dashboard: true,
            websiteID: req.params.website_id,
            email: user.email
          };
          return res.render("dashboard", {
            ...websiteConfiguration,
            layout: "base"
          });
        });
      }
    }
  });
};

// Redner company infromation for CMS
module.exports.renderCompanyInformation = (req, res) => {
  Website.findById(req.params.website_id, function(err, website) {
    if (err) {
      res.status(500).json({ error: "Server Error" });
    } else {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        User.findById(website.userID, function(err, user) {
          let websiteConfiguration = Object.assign({}, website)._doc;
          websiteConfiguration = {
            ...websiteConfiguration,
            companyInfo: true,
            websiteID: req.params.website_id,
            email: user.email
          };
          return res.render("companyInformation", {
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

module.exports.publishWebsite = (req, res, websiteID) => {
  // Set website status to building to update front end UI
  Website.findById(websiteID, function(err, website) {
    website.status = "Building";
    set("status", "Building", website);
    website.save();

    // Execute bash script located in the site generator to build or develop the Site
    // Use ./develop for Development and ./build for building
    shell.cd("../../website-generator");
    shell.exec(
      `./build-script ${req.params.website_id} ${
        process.env.BUILD_PATH
      } ${website.title.toLowerCase()}`,
      {
        async: true,
        silent: true
      },
      () => {
        // Once website is built set the status back to live
        Website.findById(websiteID, function(err, website) {
          set("status", "Live", website);
          website.save();
        });
      }
    );
  });
  return res.status(200).send({ test: "making new directory" });
};

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
