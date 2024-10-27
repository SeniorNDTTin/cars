const { prefixAdmin } = require("../../configs/system");

const dashboardRoutes = require("./dashboard.route");
const carRoutes = require("./car.route");
const companyRoutes = require("./company.route");
const engineRoutes = require("./engine.route");

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
}