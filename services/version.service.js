const executeOracleService = require("./executeOracle.service");

const formatPadStartHelper = require("../helpers/formatPadStart.helper");

module.exports.generateId = async () => {
  const versions = await this.getVersions();

  let maxId = "0000000000";
  versions.forEach(item => {
    if (item.ID > maxId) {
      maxId = item.ID;
    }
  });

  const idNumber = parseInt(maxId) + 1;
  const id = formatPadStartHelper.formatPadStart(idNumber, 10);
  return id;
}

module.exports.getVersions = async () => {
  const versions = await executeOracleService.executeOracle(`
    SELECT * FROM car_versions
  `);
  return versions;
}

module.exports.createVersion = async (name) => {
  const id = await this.generateId();

  await executeOracleService.executeOracle(`
    INSERT INTO car_versions
    VALUES(
      '${id}',
      '${name}'
    )
  `);
}