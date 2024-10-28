const system = require("../../configs/system");

const segmentService = require("../../services/segment.service");

module.exports.getSegments = async (req, res) => {
  try {
    const segments = await segmentService.getSegments();

    res.render("admin/pages/segments/index.pug", {
      pageTitle: "Segments",
      segments: segments
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createSegmentView = async (req, res) => {
  try {
    res.render("admin/pages/segments/create.pug", {
      pageTitle: "Create A New Segment"
    });
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}

module.exports.createSegment = async (req, res) => {
  try {
    const name = req.body.name;

    await segmentService.createSegment(name);

    req.flash("success", "Segment was created successfully.");
    res.redirect(`${system.prefixAdmin}/segments/get`);
  } catch {
    req.flash("error", "Something went wrong.");
    res.redirect("back");
  }
}