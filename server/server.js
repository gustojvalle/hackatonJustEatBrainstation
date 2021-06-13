const express = require("express");
const cors = require("cors");
const app = express();
const donationRoute = require("./routes/donationRoute");
const restaurantRoute = require("./routes/restaurantRoute");
app.use(express.json());
app.use(cors());
app.use("/donation", donationRoute);
app.use("/restaurant", restaurantRoute);

app.listen(8080);
