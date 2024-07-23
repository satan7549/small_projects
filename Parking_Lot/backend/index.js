const express = require("express");
const app = express();
const parkingLotRoutes = require("./routes/parkingLotRoutes");

app.use(express.json());

app.use("/api", parkingLotRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Parking Lot System");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
