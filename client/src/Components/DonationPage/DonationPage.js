import "./donation-page.scss";

import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { v4 as uuidv4 } from "uuid";

import Selector from "../Selector/Selector";
import { submitDonation } from "../../modules/submitData";
import { retrieveRestaurant } from "../../modules/retrieveData";

const DonationPage = ({ history, login }) => {
  console.log(process.env.REACT_APP_RESTAURANTS_URL);
  const queryParams = queryString.parse(history.location.search);
  const queryParamsValidation = queryParams.toDo === "donate";
  const [donation, setDonation] = useState({
    id: uuidv4(),
    donation: 0,
    restaurant: 123456,
  });
  const [payment, setPayment] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [donationSucceeded, setDonationSucceeded] = useState(false);

  useEffect(() => {
    console.log(donation);
    if (queryParams.postCode) {
      retrieveRestaurant(queryParams.postCode, process.env.RESTAURANTS_URL)
        .then((data) => setRestaurants(data))
        .catch((err) => console.log("failed", err));
    }
  }, [donation, queryParams.postCode]);

  const handleChange = (e) => {
    setDonation({ ...donation, [e.target.name]: e.target.value });
  };
  const handlePayment = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const cancelHandler = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(payment);

    submitDonation(donation, payment, queryParamsValidation)
      .then(() => {
        setDonationSucceeded(true);
        setTimeout(() => history.push("/home"), 3000);
      })
      .catch((err) => console.log("failed to donate: ", err));
  };
  if (!login) {
    console.log(login);
    return (
      <div className="main-page">
        <a className="main-page__anchor" href="/login">
          Please login to the page
        </a>
      </div>
    );
  }

  if (donationSucceeded) {
    return (
      <div className="donation-page">
        <h2 className="donation-page__succesfull-text">
          Thank you for the gesture.
        </h2>
      </div>
    );
  }

  return (
    <div className="donation-page">
      <form onSubmit={submitHandler} className="donation-page" type="submit">
        {queryParams.toDo === "donate" ? (
          <Selector restaurants={restaurants} changeHandler={handleChange} />
        ) : null}
        <label className="donation-page__label">
          How much would you like to{" "}
          {queryParams.toDo === "donate"
            ? "donate for the food bank?"
            : "spend to pay for someones meal?"}
        </label>
        <input
          name="donation"
          className="donation-page__input"
          onChange={handleChange}
          value={donation.donation}
          type="number"
          min="0"
          step="0.1"
        />

        <label className="donation-page__label">Name</label>
        <input
          className="donation-page__input"
          onChange={handlePayment}
          name="name"
          type="text"
        />

        <label className="donation-page__label">Debit/Credit Card Number</label>
        <input
          className="donation-page__input"
          onChange={handlePayment}
          name="card"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          type="text"
        />
        <label className="donation-page__label">CVV</label>
        <input
          className="donation-page__input"
          onChange={handlePayment}
          name="cvv"
          pattern="[0-9]{3}"
          validate="[0-9]{3}"
          autocomplete="cc-number"
          maxlength="3"
          placeholder="xxx"
          type="text"
        />
        <label className="donation-page__label">Expiry Date</label>
        <input
          className="donation-page__input"
          onChange={handlePayment}
          name="expDate"
          type="month"
        />

        <button className="donation-page__button">Confirm Donation</button>
        <button onClick={cancelHandler} className="donation-page__button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DonationPage;
