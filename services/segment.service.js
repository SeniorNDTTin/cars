const executeOracleService = require("./executeOracle.service");

const formatPadStartHelper = require("../helpers/formatPadStart.helper");

module.exports.generateId = async () => {
  const segments = await this.getSegments();

  let maxId = "0000000000";
  segments.forEach(item => {
    if (item.ID > maxId) {
      maxId = item.ID;
    }
  });

  const idNumber = parseInt(maxId) + 1;
  const id = formatPadStartHelper.formatPadStart(idNumber, 10);
  return id;
}

module.exports.getSegments = async () => {
  const segments = await executeOracleService.executeOracle(`
    SELECT * FROM car_segments
  `);
  return segments;
}

module.exports.createSegment = async (name) => {
  const id = await this.generateId();

  await executeOracleService.executeOracle(`
    INSERT INTO car_segments
    VALUES(
      '${id}',
      '${name}'
    )
  `);
}