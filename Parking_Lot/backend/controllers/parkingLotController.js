// const parkingLotService = require("../services/parkingLotService");

// const createParkingLot = (input) => {
//   const [parkingLotId, noOfFloors, noOfSlotsPerFloor] = input;
//   return parkingLotService.createParkingLot(
//     parkingLotId,
//     parseInt(noOfFloors),
//     parseInt(noOfSlotsPerFloor)
//   );
// };

// const parkVehicle = (input) => {
//   const [vehicleType, regNo, color] = input;
//   return parkingLotService.parkVehicle(vehicleType, regNo, color);
// };

// const unparkVehicle = (input) => {
//   const [ticketId] = input;
//   return parkingLotService.unparkVehicle(ticketId);
// };

// const display = (input) => {
//   const [displayType, vehicleType] = input;
//   return parkingLotService.display(displayType, vehicleType);
// };

// module.exports = {
//   createParkingLot,
//   parkVehicle,
//   unparkVehicle,
//   display,
// };

const parkingLotService = require("../services/parkingLotService");

const createParkingLot = (req, res) => {
  const { parkingLotId, noOfFloors, noOfSlotsPerFloor } = req.body;
  try {
    const message = parkingLotService.createParkingLot(
      parkingLotId,
      parseInt(noOfFloors),
      parseInt(noOfSlotsPerFloor)
    );
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const parkVehicle = (req, res) => {
  const { vehicleType, regNo, color } = req.body;
  try {
    const message = parkingLotService.parkVehicle(vehicleType, regNo, color);
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const unparkVehicle = (req, res) => {
  const { ticketId } = req.body;
  try {
    const message = parkingLotService.unparkVehicle(ticketId);
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const display = (req, res) => {
  const { displayType, vehicleType } = req.body;
  try {
    const message = parkingLotService.display(displayType, vehicleType);
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createParkingLot,
  parkVehicle,
  unparkVehicle,
  display,
};
