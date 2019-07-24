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

// Handle website page routing
cmsRouter.get("/:website_id", checkWebsiteExists, (req, res) => {
  cmsController.renderPage(req, res, "dashboard");
});

cmsRouter.get(
  "/:website_id/companyInformation",
  checkWebsiteExists,
  (req, res) => {
    cmsController.renderPage(req, res, "companyInformation");
  }
);

cmsRouter.get("/:website_id/pages", checkWebsiteExists, (req, res) => {
  cmsController.renderPage(req, res, "pages");
});

cmsRouter.get("/:website_id/features", checkWebsiteExists, (req, res) => {
  cmsController.renderPage(req, res, "features");
});

cmsRouter.get("/:website_id/orders", checkWebsiteExists, (req, res) => {
  cmsController.renderPage(req, res, "orders");
});

cmsRouter.get(
  "/:website_id/accountSettings",
  checkWebsiteExists,
  (req, res) => {
    cmsController.renderPage(req, res, "accountSettings");
  }
);

cmsRouter.get("/:website_id/support", checkWebsiteExists, (req, res) => {
  cmsController.renderPage(req, res, "support");
});

// Handle updating website and updating website information
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
