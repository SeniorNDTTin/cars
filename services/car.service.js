const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const executeOracleService = require("./executeOracle.service");

const formatCurrencyVNDHelper = require("../helpers/formatCurrencyVND.helper");
const formatPadStartHelper = require("../helpers/formatPadStart.helper");

module.exports.generateId = async () => {
  const cars = await this.getCars();

  let maxId = "0000000000";
  cars.forEach(item => {
    if (item.ID > maxId) {
      maxId = item.ID;
    }
  });

  const idNumber = parseInt(maxId) + 1;
  const id = formatPadStartHelper.formatPadStart(idNumber, 10);
  return id;
}

module.exports.getFullCarInformation = async (car) => {
  const carCompany = await executeOracleService.executeOracle(`
    SELECT * FROM car_companies
    WHERE 
      id = ${car.CAR_COMPANY_ID}
      AND ROWNUM = 1
  `);
  car.carCompany = carCompany[0];

  const carVersion = await executeOracleService.executeOracle(`
    SELECT * FROM car_versions
    WHERE 
      id = ${car.CAR_VERSION_ID}
      AND ROWNUM = 1
  `);
  car.carVersion = carVersion[0];

  const carSegment = await executeOracleService.executeOracle(`
    SELECT * FROM car_segments
    WHERE 
      id = ${car.CAR_SEGMENT_ID}
      AND ROWNUM = 1
  `);
  car.carSegment = carSegment[0];

  const carEngine = await executeOracleService.executeOracle(`
    SELECT * FROM car_engines
    WHERE 
      id = ${car.CAR_ENGINE_ID}
      AND ROWNUM = 1
  `);
  car.carEngine = carEngine[0];
}

module.exports.getCars = async () => {
  const cars = await executeOracleService.executeOracle(`
    SELECT * FROM cars
  `);

  for (const item of cars) {
    item.basePrice = formatCurrencyVNDHelper.formatCurrencyVND(item.BASE_PRICE);

    await this.getFullCarInformation(item);
  };

  return cars;
}

module.exports.getCarById = async (id) => {
  const car = await executeOracleService.executeOracle(`
    SELECT * FROM cars
    WHERE id = ${id}
  `);
  return car[0];
}

module.exports.createCar = async (
  name,
  basePrice,
  engineId,
  segmentId,
  versionId,
  companyId
) => {
  const id = await this.generateId();

  await executeOracleService.executeOracle(`
    INSERT INTO cars
    VALUES(
      '${id}', 
      '${name}', 
      ${basePrice}, 
      '${companyId}', 
      '${versionId}', 
      '${segmentId}', 
      '${engineId}'
    )
  `);
}

module.exports.deleteCar = async (id) => {
  await executeOracleService.executeOracle(`
    DELETE FROM cars
    WHERE id = ${id}
  `);
}