const express = require("express");
const router = express.Router();
const parkingLotController = require("../controllers/parkingLotController");

router.post("/create_parking_lot", parkingLotController.createParkingLot);
router.post("/park_vehicle", parkingLotController.parkVehicle);
router.post("/unpark_vehicle", parkingLotController.unparkVehicle);
router.post("/display", parkingLotController.display);

module.exports = router;
