const express = require("express");
const cors = require("cors");
const app = express();
const donationRoute = require("./routes/donationRoute");
app.use(express.json());
app.use(cors());
app.use("/donation", donationRoute);

app.listen(8080);
