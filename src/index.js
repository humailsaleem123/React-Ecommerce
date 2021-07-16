import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.css";
import Home from "./home";
import reportWebVitals from "./reportWebVitals";
import all from "./components/all";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Data from "./data";
import Search from "./components/search";
import reactPaginate from "react-paginate";
import About from "./components/about/about";
import Login from "./components/Login/login";
import SubmitBtn from "./components/submit/submit";
import Contact from "./components/contact/contact";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={["/", "/all"]} component={Home} />
      <Route path="/furniturePage" component={Home} />
      <Route path="/bagsPage" component={Home} />
      <Route path="/decorationPage" component={Home} />
      <Route path="/shoesPage" component={Home} />

      {/* <Route path='/cartPage' render={() =>
  <Fragment>
    <Header />
    <Cart/>
    <Footer/>
  </Fragment>
} /> */}

      <Route path="/Aboutus">
        {" "}
        <Header /> <About /> <Footer />{" "}
      </Route>

      <Route path="/loginPage">
        {" "}
        <Login />{" "}
      </Route>

      <Route path="/submitPage">
        {" "}
        <SubmitBtn />{" "}
      </Route>

      <Route path="/contactus">
        {" "}
        <Header /> <Contact /> <Footer />{" "}
      </Route>

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
