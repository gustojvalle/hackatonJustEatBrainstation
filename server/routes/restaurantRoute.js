const express = require("express");
const axios = require("axios");

const restaurantRoute = express.Router();

restaurantRoute.get("/:postCode", (req, res) => {
  axios
    .get(
      `https://uk.api.just-eat.io/restaurants/bypostcode/${req.params.postCode}`
    )
    .then((response) => {
      const data = response.data.Restaurants.map((restaurant) => {
        return { id: restaurant.Id, name: restaurant.Name };
      });

      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json({ message: "failed to retrieve" });
    });
});

module.exports = restaurantRoute;
