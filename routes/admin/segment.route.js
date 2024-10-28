const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/segment.controller");

router.get("/get", controller.getSegments);

router.get("/create", controller.createSegmentView);
router.post("/create", controller.createSegment);

module.exports = router;