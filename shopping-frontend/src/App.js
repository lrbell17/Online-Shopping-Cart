import React from 'react';
import './App.css';
import ShoppingCartComponent from './components/ShoppingCartComponent';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">

          <Nav/>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cart" component={ShoppingCartComponent}/>
            <Route path="/contact" component={ContactUs} />

          </Switch>
      </div>
    </Router>
  );
}

export default App;
