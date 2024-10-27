module.exports.index = (req, res) => {
  try {
    req.flash("success", "Welcome to my website.");

    res.render("admin/pages/dashboard/index.pug", {
      pageTitle: "Dashboard"
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}