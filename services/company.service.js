const executeOracleService = require("./executeOracle.service");

const formatPadStartHelper = require("../helpers/formatPadStart.helper");

module.exports.generateId = async () => {
  const companies = await this.getCompanies();

  let maxId = "0000000000";
  companies.forEach(item => {
    if (item.ID > maxId) {
      maxId = item.ID;
    }
  });

  const idNumber = parseInt(maxId) + 1;
  const id = formatPadStartHelper.formatPadStart(idNumber, 10);
  return id;
}

module.exports.getCompanies = async () => {
  const companies = await executeOracleService.executeOracle(`
    SELECT * FROM car_companies
  `);
  return companies;
}

module.exports.createCompany = async (name) => {
  const id = await this.generateId();

  await executeOracleService.executeOracle(`
    INSERT INTO car_companies
    VALUES(
      '${id}',
      '${name}'
    )
  `);
}