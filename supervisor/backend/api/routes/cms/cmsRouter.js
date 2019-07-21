const {
  checkAuth,
  checkUserWebsites,
  checkWebsiteExists
} = require("../../middleware/");
const cmsController = require("../../controllers/cms/cmsController");
const Website = require("../../../models/websiteModel");
const cmsRouter = require("express").Router();

cmsRouter.use(checkAuth);

cmsRouter.get("/:user_id/all", checkUserWebsites, (req, res) => {
  cmsController.renderWebsiteManger(req, res);
});

cmsRouter.get("/:website_id", checkWebsiteExists, (req, res) => {
  cmsController.renderDashboard(req, res);
});

cmsRouter.get("/:website_id/companyinfo", checkWebsiteExists, (req, res) => {
  cmsController.renderCompanyInformation(req, res);
});

cmsRouter.patch("/:website_id", checkAuth, (req, res) => {
  cmsController.updateWebsiteProperty(req, res, req.params.website_id);
});

cmsRouter.post("/publish/:website_id", (req, res) => {
  cmsController.publishWebsite(req, res, req.params.website_id);
});

function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = cmsRouter;
