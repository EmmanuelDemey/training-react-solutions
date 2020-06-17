import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./Home";
import Person from "./Person";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/person/:id">
            <Person />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

const withTitle = (WrappedComponent, title) => {
  document.title = title;
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default withTitle(App, "Home Page");
