import "./login-page.scss";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import queryString from "query-string";
import { signInWithGoogle, auth } from "../../firebase";

const LoginPage = ({ history }) => {
  const queryParams = queryString.parse(history.location.search);
  console.log(queryParams);
  const [loginState, setLoginState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({ user: [] });

  const loginWithEmail = (e, email, password) => {
    e.preventDefault();
    if (loginState === "Login") {
    } else if (loginState === "Signup") {
    }
  };

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();

    auth.onAuthStateChanged((userAuth) => setUser({ user: userAuth }));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const clickHandler = (e) => {
    setLoginState(e.target.name);
    history.push(`/login?loginState=${e.target.name.toLowerCase()}`);
  };

  useEffect(() => {
    console.log(user.user.displayName);
    if (user.user.displayName) {
      history.push("/");
    }
  }, [user]);
  return (
    <div className="login-page">
      <div className="login-page__container">
        <button
          onClick={clickHandler}
          name="Login"
          className={`login-page__button ${
            queryParams.loginState === "login" && "active"
          }`}
        >
          SignIn
        </button>
        <button
          onClick={clickHandler}
          name="Signup"
          className={`login-page__button ${
            queryParams.loginState === "signup" && "active"
          }`}
        >
          SignUp
        </button>
      </div>
      <form className="login-page__form" type="submit">
        {loginState === "Signup" && (
          <>
            <label className="login-page__label">Name</label>
            <input
              value={name}
              onChange={changeHandler}
              className="login-page__input"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </>
        )}
        <label className="login-page__label">USERNAME/EMAIL</label>
        <input
          value={email}
          onChange={changeHandler}
          className="login-page__input"
          name="email"
          type="email"
          placeholder="Your email address"
        />
        <label className="login-page__label">PASSWORD</label>
        <input
          value={password}
          onChange={changeHandler}
          className="login-page__input"
          name="password"
          type="password"
          placeholder="Your password"
        />
        <div className="login-page__button-container">
          <button onClick={loginWithEmail} className={`login-page__button`}>
            {loginState}
          </button>
          <button
            onClick={loginWithGoogle}
            className={`login-page__button`}
          >{`${loginState} with Google`}</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
