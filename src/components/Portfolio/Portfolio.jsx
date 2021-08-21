import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import  { getAllocation, getPortfolioHeader } from '../../actions/actions';

import Chart from '../Chart/Chart';
import Header from './Header/Header';
import { DropdownMenu } from '../Dropdown/Dropdown';

import useStyles from './styles';

import arrow from '../../images/arrow.svg';
import backArrow from '../../images/arrow_180.svg';

import { settings } from '../../settings/settings';
import { capitalize } from '../../lib/tools';

const Portfolio = () => {
    const store = useSelector((state) => state.reducer);

    const [activeBreakdownData, setActiveBreakdownData] = useState({
        breakdown: "category",
        view: "absolute"
    });

    const classes = useStyles();

    const mainMenu = [
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].breakdown}: {settings.dict[store.lang][activeBreakdownData.breakdown]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].view}: {settings.dict[store.lang][activeBreakdownData.view]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
    ] 

    const breakdownFilter = 
        <DropdownMenu
            move="#filter"
            main={
                mainMenu
            }
            onClickMain={[{next: "B"}, {next: "C"}]}
            B={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {settings.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].category}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].subcategory}
                    </div>
                ]
            }
            onClickB={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "category"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "subcategory"})}]}
            C={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {settings.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].absolute}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].percentage}
                    </div>
                ]
            }
            onClickC={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, view: "absolute"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, view: "percentage"})}]}
            >
        </DropdownMenu>

    return (
        <div className={classes.background}>
            <Header fetchData={getPortfolioHeader}/>
            <div className={classes.rowOne}>
                <div className={classes.twoCharts}>
                    <Chart 
                        id="1" 
                        chartType="allocation" 
                        chartOptions={"allocation" + capitalize(activeBreakdownData.breakdown) + capitalize(activeBreakdownData.view)} 
                        fetchData={getAllocation}
                        filterMenu={breakdownFilter} 
                        filterState={activeBreakdownData}
                    />
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