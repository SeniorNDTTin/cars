const system = require("../../configs/system");

const engineService = require("../../services/engine.service");

module.exports.getEngines = async (req, res) => {
  try {
    const engines = await engineService.getEngines();

    res.render("admin/pages/engines/index.pug", {
      pageTitle: "Engines",
      engines: engines
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createEngineView = async (req, res) => {
  try {
    res.render("admin/pages/engines/create.pug", {
      pageTitle: "Create A New Engine"
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createEngine = async (req, res) => {
  try {
    const name = req.body.name;

    await engineService.createEngine(name);

    req.flash("success", "Engine was created successfully.");
    res.redirect(`${system.prefixAdmin}/engines/get`);
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}