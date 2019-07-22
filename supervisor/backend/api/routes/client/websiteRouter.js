const websiteRouter = require("express").Router();
const Website = require("../../../models/websiteModel");
const websiteController = require("../../controllers/client/websiteController");

websiteRouter.get("/:website_id", (req, res) => {
  let websiteID = req.params.website_id;
  console.log(websiteID);
  websiteController.getWebsiteByID(req, res, websiteID);
});

websiteRouter.get("/status/:website_id", (req, res) => {
  websiteController.getWebsiteStatus(req, res, req.params.website_id);
});

websiteRouter.post("/", (req, res) => {
  let websiteInformation = parseJSON(req.body);
  websiteController.createWebsite(req, res, websiteInformation);
});

function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = websiteRouter;
