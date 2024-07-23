const ParkingLot = require("../models/parkingLot");
const Vehicle = require("../models/vehicle");

let parkingLot = null;

const createParkingLot = (parkingLotId, noOfFloors, noOfSlotsPerFloor) => {
  parkingLot = new ParkingLot(parkingLotId, noOfFloors, noOfSlotsPerFloor);
  return `Created parking lot with ${noOfFloors} floors and ${noOfSlotsPerFloor} slots per floor`;
};

const parkVehicle = (vehicleType, regNo, color) => {
  if (!parkingLot) throw new Error("Parking lot not created");

  for (const floor of parkingLot.floors) {
    for (const slot of floor.slots) {
      if (slot.slotType === vehicleType && !slot.isOccupied) {
        const vehicle = new Vehicle(vehicleType, regNo, color);
        slot.isOccupied = true;
        slot.vehicle = vehicle;
        return `Parked vehicle. Ticket ID: ${parkingLot.id}_${floor.floorNumber}_${slot.slotNumber}`;
      }
    }
  }
  throw new Error("Parking Lot Full");
};

const unparkVehicle = (ticketId) => {
  if (!parkingLot) throw new Error("Parking lot not created");

  const [parkingLotId, floorNo, slotNo] = ticketId.split("_");
  if (parkingLot.id !== parkingLotId) throw new Error("Invalid Ticket");

  const floor = parkingLot.floors[parseInt(floorNo) - 1];
  const slot = floor.slots[parseInt(slotNo) - 1];

  if (!slot.isOccupied) throw new Error("Slot is already empty");

  const vehicle = slot.vehicle;
  slot.isOccupied = false;
  slot.vehicle = null;

  return `Unparked vehicle with Registration Number: ${vehicle.registrationNo} and Color: ${vehicle.color}`;
};

const display = (displayType, vehicleType) => {
  if (!parkingLot) throw new Error("Parking lot not created");

  return parkingLot.floors.map((floor) => {
    const slots = floor.slots.filter((slot) => slot.slotType === vehicleType);
    if (displayType === "free_count") {
      return {
        floor: floor.floorNumber,
        count: slots.filter((slot) => !slot.isOccupied).length,
      };
    } else if (displayType === "free_slots") {
      return {
        floor: floor.floorNumber,
        slots: slots
          .filter((slot) => !slot.isOccupied)
          .map((slot) => slot.slotNumber),
      };
    } else if (displayType === "occupied_slots") {
      return {
        floor: floor.floorNumber,
        slots: slots
          .filter((slot) => slot.isOccupied)
          .map((slot) => slot.slotNumber),
      };
    }
  });
};

module.exports = {
  createParkingLot,
  parkVehicle,
  unparkVehicle,
  display,
};
