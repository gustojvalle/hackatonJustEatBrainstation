const express = require("express");
const fs = require("fs");
const restaurantRoute = require("./restaurantRoute");

const donationRoute = express.Router();

donationRoute.post("/", (req, res) => {
  const { id, donation, name, card, cvv, expDate } = req.body;
  if (id && donation > 0 && name && card && cvv && expDate) {
    const donationPot = JSON.parse(fs.readFileSync("./data/donationPot.json"));
    donationPot.totalOnThePot =
      parseFloat(donationPot.totalOnThePot) + parseFloat(donation);
    console.log(donationPot.totalOnThePot);

    fs.writeFileSync("./data/donationPot.json", JSON.stringify(donationPot));

    res.status(200).json({ message: "successfull" });
  } else {
    res.status(502).json({ message: "bad request" });
  }
});

donationRoute.post("/:restaurandID", (req, res) => {
  const { restaurant, id, donation, name, card, cvv, expDate } = req.body;
  const restaurantID = req.params.restaurandID;

  if (id && donation > 0 && name && card && cvv && expDate) {
    let donationRestaurants = JSON.parse(
      fs.readFileSync("./data/donationRestaurant.json")
    );
    let rest = donationRestaurants.find((item) => item.id === restaurantID);
    console.log(rest);

    if (rest) {
      console.log(rest);
      donationRestaurants = donationRestaurants.filter(
        (item) => item.id !== restaurantID
      );
      rest = {
        ...rest,
        donation: parseFloat(rest.donation) + parseFloat(donation),
      };
      console.log(rest);
      donationRestaurants = [...donationRestaurants, rest];
      fs.writeFileSync(
        "./data/donationRestaurant.json",
        JSON.stringify(donationRestaurants)
      );
    } else {
      rest = { id: restaurantID, donation: donation };

      donationRestaurants = [...donationRestaurants, rest];
      fs.writeFileSync(
        "./data/donationRestaurant.json",
        JSON.stringify(donationRestaurants)
      );
    }

    res.status(200).json({ message: "thank you for the donation" });
  } else {
    res.status(502).json({ message: "bad request" });
  }
});

module.exports = donationRoute;
