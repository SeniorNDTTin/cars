const executeOracleService = require("./executeOracle.service");

module.exports.getVersions = async () => {
  const versions = await executeOracleService.executeOracle(`
    SELECT * FROM car_versions
  `);
  return versions;
}