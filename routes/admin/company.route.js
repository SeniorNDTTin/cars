const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/company.controller");

router.get("/get", controller.getCompanies);

router.get("/create", controller.createCompanyView);
router.post("/create", controller.createCompany);

module.exports = router;