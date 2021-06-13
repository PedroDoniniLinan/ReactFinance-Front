import React from 'react';

import  { getBalance, getPortfolioHeader } from '../../actions/actions';

import Chart from '../Chart/Chart';
import Header from './Header/Header';

import useStyles from './styles';


const Portfolio = () => {

    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Header fetchData={getPortfolioHeader}/>
            <div className={classes.rowOne}>
                <div className={classes.twoCharts}>
                    <Chart id="1" chartType="balance" chartOptions="balance" fetchData={getBalance}/>
                </div>
                {/* <div className={classes.twoCharts}>
                    <Chart id="2" chartType="netIncome" chartOptions="netIncome" fetchData={getNetIncome}/>
                </div> */}
            </div>
            {/* <div className={classes.oneChart}>
                <Chart id="3" chartType="cashFlow" chartOptions="cashFlow" fetchData={getCashFlow}/>
            </div> */}
            {/* <div className={classes.oneChart}>
                <Chart 
                    id="4" 
                    chartType="breakdown" 
                    chartOptions={activeBreakdownData.data + capitalize(activeBreakdownData.breakdown) + capitalize(activeBreakdownData.view)} 
                    fetchData={getBreakdown} 
                    filterMenu={breakdownFilter} 
                    filterState={activeBreakdownData}/>
            </div> */}
        </div>        
    );
}
 
export default Portfolio;