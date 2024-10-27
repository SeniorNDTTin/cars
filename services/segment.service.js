const executeOracleService = require("./executeOracle.service");

module.exports.getSegments = async () => {
  const segments = await executeOracleService.executeOracle(`
    SELECT * FROM car_segments
  `);
  return segments;
}