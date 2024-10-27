const system = require("../../configs/system");

const carService = require("../../services/car.service");
const engineService = require("../../services/engine.service");
const segmentService = require("../../services/segment.service");
const versionService = require("../../services/version.service");
const companyService = require("../../services/company.service");

module.exports.getCars = async (req, res) => {
  try {
    const cars = await carService.getCars();

    res.render("admin/pages/cars/index.pug", {
      pageTitle: "Cars",
      cars: cars
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createCarView = async (req, res) => {
  try {
    const engines = await engineService.getEngines();
    const segments = await segmentService.getSegments();
    const versions = await versionService.getVersions();
    const companies = await companyService.getCompanies();

    res.render("admin/pages/cars/create.pug", {
      pageTitle: "Create A New Car",
      engines: engines,
      segments: segments,
      versions: versions,
      companies: companies
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createCar = async (req, res) => {
  try {
    const name = req.body.name;
    const basePrice = parseInt(req.body["base-price"]);
    const engineId = req.body.engine;
    const segmentId = req.body.segment;
    const versionId = req.body.segment;
    const companyId = req.body.company;

    await carService.createCar(
      name,
      basePrice,
      engineId,
      segmentId,
      versionId,
      companyId
    );
    req.flash("success", "Car was created successfully.");
    res.redirect(`${system.prefixAdmin}/cars/get`);
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}