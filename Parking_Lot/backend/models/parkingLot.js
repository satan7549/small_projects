class ParkingLot {
  constructor(id, floors, slotsPerFloor) {
    this.id = id;
    this.floors = Array.from({ length: floors }, (_, index) => ({
      floorNumber: index + 1,
      slots: Array.from({ length: slotsPerFloor }, (_, slotIndex) => ({
        slotNumber: slotIndex + 1,
        slotType: this.determineSlotType(slotIndex + 1),
        isOccupied: false,
        vehicle: null,
      })),
    }));
  }

  determineSlotType(slotNumber) {
    if (slotNumber === 1) return "TRUCK";
    if (slotNumber === 2 || slotNumber === 3) return "BIKE";
    return "CAR";
  }
}

module.exports = ParkingLot;
