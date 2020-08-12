import React from 'react';
import SideBar from './SideBar.js';
import PortfolioData from './PortfolioData.js';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

const Routing = () =>{
  return(
    <Switch>
        <Route exact path="/">
          <PortfolioData />
        </Route>
    </Switch>
    );
}

function App (){
  return(
    <BrowserRouter>
        <PortfolioData />
        <SideBar />
      </BrowserRouter>

  );
}

export default App;