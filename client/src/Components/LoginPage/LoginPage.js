import "./login-page.scss";
import React, { useState, useEffect } from "react";

import { signInWithGoogle, auth } from "../../firebase";

const LoginPage = ({ history, setLogin }) => {
  const [user, setUser] = useState({ user: null });

  const loginWithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();

    auth.onAuthStateChanged((userAuth) => {
      if (typeof userAuth) {
        setUser({ user: userAuth });
      }
    });
  };

  useEffect(() => {
    console.log(typeof user.user);
    if (user.user) {
      history.push("/home");
      setLogin(true);
    }
  }, [user]);
  return (
    <div className="login-page">
      <form className="login-page__form" type="submit">
        <button
          onClick={loginWithGoogle}
          className={`login-page__button`}
        >{`Login with Google`}</button>
      </form>
    </div>
  );
};

export default LoginPage;
