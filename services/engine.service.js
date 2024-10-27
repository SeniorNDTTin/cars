const executeOracleService = require("./executeOracle.service");

const formatPadStartHelper = require("../helpers/formatPadStart.helper");

module.exports.generateId = async () => {
  const engines = await this.getEngines();

  let maxId = "0000000000";
  engines.forEach(item => {
    if (item.ID > maxId) {
      maxId = item.ID;
    }
  });

  const idNumber = parseInt(maxId) + 1;
  const id = formatPadStartHelper.formatPadStart(idNumber, 10);
  return id;
}

module.exports.getEngines = async () => {
  const engines = await executeOracleService.executeOracle(`
    SELECT * FROM car_engines
  `);
  return engines;
}

module.exports.createEngine = async (name) => {
  const id = await this.generateId();

  await executeOracleService.executeOracle(`
    INSERT INTO car_engines
    VALUES(
      '${id}',
      '${name}'
    )
  `);
}