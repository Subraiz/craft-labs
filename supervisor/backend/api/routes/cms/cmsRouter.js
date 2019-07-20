const { checkAuth, checkWebsite } = require("../../middleware/");
const cmsController = require("../../controllers/cms/cmsController");

const Website = require("../../../models/websiteModel");
const cmsRouter = require("express").Router();

cmsRouter.use(checkAuth);

cmsRouter.get("/:user_id/all", checkWebsite, (req, res) => {
  cmsController.renderWebsiteManger(req, res);
});

cmsRouter.get("/:website_id", (req, res) => {
  cmsController.renderDashboard(req, res);
});

cmsRouter.get("/:website_id/companyinfo", (req, res) => {
  cmsController.renderCompanyInformation(req, res);
});

cmsRouter.patch("/:website_id", checkAuth, (req, res) => {
  cmsController.updateWebsiteProperty(req, res, req.params.website_id);
});

function parseJSON(object) {
  return JSON.parse(JSON.stringify(object));
}

module.exports = cmsRouter;
