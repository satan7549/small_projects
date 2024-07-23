class Slot {
  constructor(slotNumber, slotType) {
    this.slotNumber = slotNumber;
    this.slotType = slotType;
    this.isOccupied = false;
    this.vehicle = null;
  }
}

module.exports = Slot;
