import Header from "./Components/Header/Header";
import DonationPage from "./Components/DonationPage/DonationPage";

import MainPage from "./Components/MainPage/MainPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import About from "./Components/About/About";
import { Route, Redirect, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Switch>
        <Redirect from="/" to="/login" exact />
      </Switch>
      <Route path="/" component={Header} />
      <Route
        path="/home"
        render={(renderProps) => <MainPage {...renderProps} login={login} />}
      />
      <Route
        path="/donate"
        render={(renderProps) => (
          <DonationPage {...renderProps} login={login} />
        )}
      />
      <Route
        path="/login"
        render={(renderProps) => (
          <LoginPage {...renderProps} setLogin={setLogin} />
        )}
      />
      <Route path="/about" component={About} />
    </>
  );
}

export default App;
