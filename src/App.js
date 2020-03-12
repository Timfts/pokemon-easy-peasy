import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import AuthPage from "./pages/Auth";
import { StoreProvider } from "easy-peasy";
import store from "./state";
import "./config/styles/base-styles/main.scss";
import "typeface-josefin-sans";

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
