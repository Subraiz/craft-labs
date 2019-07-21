// Handle all logic for basic website routing and generation
const Website = require("../../../models/websiteModel");
const stringify = require("json-stringify-safe");

// Fetch website by ID
module.exports.getWebsiteByID = (req, res, websiteID) => {
  Website.findById(websiteID, function(err, website) {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Website Not Found" });
    } else {
      console.log(website);
      return res.status(200).json(website);
    }
  });
};

// Create new website from incoming post request
module.exports.createWebsite = (req, res, websiteInformation) => {
  // Create new instance of website and populate it with necessary fields
  let website = new Website();
  website.userID = websiteInformation.userID;
  website.domain = websiteInformation.domain;
  website.features = websiteInformation.features;
  website.logo = websiteInformation.logo;
  website.pages = websiteInformation.pages;
  website.planType = websiteInformation.planType;
  website.title = websiteInformation.title;
  website.type = websiteInformation.type;
  website.visitors = [{ ip: "127.0.0.1" }];
  website.companyInformation = websiteInformation.companyInformation;
  website.status = websiteInformation.status;

  // Save the website and check for errors
  website.save(function(err) {
    if (err) res.json(err);
    return res.json({
      message: "New website created!",
      data: website
    });
  });
};

module.exports.getWebsiteStatus = (req, res, websiteID) => {
  Website.findById(websiteID, function(err, website) {
    if (err) {
      return res.status(500).send({ error: "Server Error" });
    } else if (!website) {
      return res.status(404).send({ error: "Website doesn't exist!" });
    } else {
      return res.status(200).send(website.status);
    }
  });
};

let websiteController = module.exports;
