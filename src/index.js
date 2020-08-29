import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
