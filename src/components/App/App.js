import React from 'react';
import './App.scss'
import {NavLink, Route, Switch} from "react-router-dom";
import {Catalog} from "../Catalog";
import {Basket} from "../Basket";

const App = () => {
    return (
        <>
          <nav className="ui menu">
            <NavLink
                exact
                to="/"
                activeClassName="active item"
                className="item"
            >
              Home
            </NavLink>
            <NavLink
                to="/basket"
                activeClassName="active item"
                className="item"
            >
                <i className="blue shopping basket large icon"/>
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/basket/" component={Basket} />
          </Switch>
        </>
    );
};

export default App;
