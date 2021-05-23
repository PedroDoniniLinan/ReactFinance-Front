import React
// , { useState } 
from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import  { getBalance, getCashFlow, getNetIncome, getHeader, getBreakdown } from '../actions/actions';

import NavBar from './NavBar/NavBar';
import Overview from './Overview/Overview';
import Menu from "./Menu/Menu";

// import Header from './Header/Header';
// import Chart from './Chart/Chart';
// import { DropdownMenu } from './Dropdown/Dropdown';

// import arrow from '../images/arrow.svg';
// import backArrow from '../images/arrow_180.svg';
// import check from '../images/check.svg';

import useStyles from './styles';
import Portfolio from './Portfolio/Portfolio';

// import { settings } from '../settings/settings';
// import { capitalize } from '../lib/tools';


const Main = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <NavBar />
            <Switch>
                <Route exact path="/Menu" component={Menu} />
                <Route exact path="/Overview" component={Overview} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/">
                    <Redirect to="/Menu" />
                </Route>
                {/* <Route exact path="/About" component={About} /> */}
            </Switch>
        </div>
    );
}
 
export default Main;