import "./selector.scss";

import React from "react";

const Selector = ({ changeHandler, restaurants }) => {
  return (
    <div className="selector">
      <label className="selector__label">
        Select the restaurant/food bank you would like to donate
      </label>
      <select
        className="selector__input"
        onChange={changeHandler}
        name="restaurant"
      >
        <option value="12345">Test restaurant</option>
        {restaurants.map((restaurant) => (
          <option key={restaurant.id} value={restaurant.id}>
            {restaurant.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
