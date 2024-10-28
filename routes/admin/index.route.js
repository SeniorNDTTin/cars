const { prefixAdmin } = require("../../configs/system");

const dashboardRoutes = require("./dashboard.route");
const carRoutes = require("./car.route");
const companyRoutes = require("./company.route");
const engineRoutes = require("./engine.route");
const segmentRoutes = require("./segment.route");
const versionRoutes = require("./version.route");

module.exports = (app) => {
  app.use(
    `${prefixAdmin}/dashboard`,
    dashboardRoutes
  );

  app.use(
    `${prefixAdmin}/cars`,
    carRoutes
  );

  app.use(
    `${prefixAdmin}/companies`,
    companyRoutes
  );

  app.use(
    `${prefixAdmin}/engines`,
    engineRoutes
  );

  app.use(
    `${prefixAdmin}/segments`,
    segmentRoutes
  );

  app.use(
    `${prefixAdmin}/versions`,
    versionRoutes
  );
}