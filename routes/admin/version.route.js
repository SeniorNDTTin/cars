const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/version.controller");

router.get("/get", controller.getVersions);

router.get("/create", controller.createVersionView);
router.post("/create", controller.createVersion);

module.exports = router;