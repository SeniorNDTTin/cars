const system = require("../../configs/system");

const versionService = require("../../services/version.service");

module.exports.getVersions = async (req, res) => {
  try {
    const versions = await versionService.getVersions();

    res.render("admin/pages/versions/index.pug", {
      pageTitle: "Versions",
      versions: versions
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createVersionView = async (req, res) => {
  try {
    res.render("admin/pages/versions/create.pug", {
      pageTitle: "Create A New Version"
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createVersion = async (req, res) => {
  try {
    const name = req.body.name;

    await versionService.createVersion(name);

    req.flash("success", "Version was created successfully.");
    res.redirect(`${system.prefixAdmin}/versions/get`);
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}