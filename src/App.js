import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import Content from "./components/Content";
import Footer from "./components/Footer";



function App() {

  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Content}/>
        <Route path="/checkout" component={Checkout}/>
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
