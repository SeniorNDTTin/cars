const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/car.controller");

router.get("/get", controller.getCars);

router.get("/create", controller.createCarView);
router.post("/create", controller.createCar);

module.exports = router;