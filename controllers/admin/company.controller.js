const system = require("../../configs/system");

const companyService = require("../../services/company.service");

module.exports.getCompanies = async (req, res) => {
  try {
    const companies = await companyService.getCompanies();

    res.render("admin/pages/companies/index.pug", {
      pageTitle: "Companies",
      companies: companies
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createCompanyView = async (req, res) => {
  try {
    res.render("admin/pages/companies/create.pug", {
      pageTitle: "Create A New Company"
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createCompany = async (req, res) => {
  try {
    const name = req.body.name;

    await companyService.createCompany(name);

    req.flash("success", "Company was created successfully.");
    res.redirect(`${system.prefixAdmin}/companies/get`);
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}