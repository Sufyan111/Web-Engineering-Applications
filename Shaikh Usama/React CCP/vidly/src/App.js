import React, { Component } from "react";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/LoginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rental}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
