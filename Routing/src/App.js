import React from 'react';
import './App.css';
import Mounting from './Components/Mounting';
import Updating from './Components/Updating'; 
import Unmounting from './Components/Unmounting';
import { BrowserRouter } from 'react-router-dom'
import  { Switch, Route } from 'react-router-dom'  //npm install react-router-dom
import Header from './Components/Header';

function App() {
  return (
    <div>
    <BrowserRouter> 
    <Header />
      <Switch>
        <Route exact path="/" component={Mounting} /> 
        <Route exact path="/updating" component={Updating} /> 
        <Route exact path="/unmounting" component={Unmounting} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;