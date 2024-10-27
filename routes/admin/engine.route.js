const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/engine.controller");

router.get("/get", controller.getEngines);

router.get("/create", controller.createEngineView);
router.post("/create", controller.createEngine);

module.exports = router;