const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

const PORT = 5000;

// Endpoint to get filtered data
app.get("/bookings", (req, res) => {
  const { startDate, endDate } = req.query;
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "hotel_bookings_1000.json"))
  );

  const filteredData = data.filter((booking) => {
    const bookingDate = new Date(
      booking.arrival_date_year,
      booking.arrival_date_month - 1,
      booking.arrival_date_day_of_month
    );
    return (
      bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate)
    );
  });

  res.json(filteredData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
