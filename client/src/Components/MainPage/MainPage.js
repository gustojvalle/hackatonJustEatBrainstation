import "./main-page.scss";
import React, { useState } from "react";
import Button from "../Button/Button";
import { postcodeValidator } from "postcode-validator";

const MainPage = ({ history, login }) => {
  const [postCode, setPostCode] = useState({ postCode: "", validation: false });

  const clickHandler = (e, path, hist, toDo) => {
    if (e.target.name === "Donate" && !postCode.postCode) {
      alert("please provide a postcode");
      return false;
    }
    hist.push(
      `/${path}?toDo=${toDo}&postCode=${postCode.postCode.split(" ").join("")}`
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validation = postcodeValidator(postCode.postCode, "GB");
    setPostCode({ ...postCode, validation: validation });
  };
  const postCodeHandler = (e) => {
    setPostCode({ ...postCode, postCode: e.target.value });
  };

  console.log(login);
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
  return (
    <div className="main-page">
      <article className="main-page__article">
        <h2 className="main-page__article-title">Welcome to GWG Takeway</h2>
        <p>
          What would you like to do today? <br />
          Would you like to donate for a FoodBank?
          <br />
          or would you like to pay for someone elses meal?
        </p>
      </article>
      {!postCode.validation ? (
        <form
          type="submit"
          onSubmit={submitHandler}
          className="main-page__form"
        >
          <div className="main-page__form-container">
            <label className="main-page__label">What is your post-code?</label>
            <input
              onChange={postCodeHandler}
              className="main-page__input"
              validate="^(([A-Z]{1,2}d[A-Zd]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?d[A-Z]{2}|BFPO ?d{1,4}|(KYd|MSR|VG|AI)[ -]?d{4}|[A-Z]{2} ?d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$"
              type="text"
              value={postCode.postCode}
            />
          </div>
          <button className="main-page__button">Confirm post-code</button>
        </form>
      ) : (
        <div className="main-page__validation">
          <h3 className="main-page__validation-text">
            Thanks for the post-code
          </h3>
        </div>
      )}
      <section className="main-page__button-container">
        <Button
          pathName="donate"
          clickHandler={clickHandler}
          text="Donate"
          historyA={history}
          toDo="donate"
        />
        <Button
          pathName="donate"
          clickHandler={clickHandler}
          text="Good Will Gesture"
          toDo="gwg"
          historyA={history}
        />
      </section>
    </div>
  );
};

export default MainPage;
