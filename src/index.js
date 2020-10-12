import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css' 
import Home from "./components/Home";
// import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Client from "./components/Client";
import ExecutiveDueDilligence from "./components/ExecutiveDueDilligence";

const routing = (
  <Router>
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/executiveduediligence" component={ExecutiveDueDilligence} />
        <Route path="/client" component={Client} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  
);

ReactDOM.render(routing, document.getElementById("root"));





