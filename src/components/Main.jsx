import React from 'react';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { useSelector } from 'react-redux';

import  { getBalance, getCashFlow, getNetIncome } from '../actions/actions';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Chart from './Chart/Chart';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    // let store = useSelector((state) => state.reducer);
    // let dict = store.dict[store.lang];
    // let chartData = store.data;
    // let unit = dict.unit; 

    return (
        <div className={classes.background}>
            <NavBar />
            <Header />
            <div className={classes.rowOne}>
                <div className={classes.twoCharts}>
                    <Chart id="1" chartType="balance" dataFetch={getBalance}/>
                </div>
                <div className={classes.twoCharts}>
                    <Chart id="2" chartType="netIncome" dataFetch={getNetIncome}/>
                </div>
            </div>
            <div className={classes.oneChart}>
                <Chart id="3" chartType="cashFlow" dataFetch={getCashFlow}/>
            </div>
        </div>        
    );
}
 
export default Main;