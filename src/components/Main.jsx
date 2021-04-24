import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import  { getBalance, getCashFlow, getNetIncome, getHeader } from '../actions/actions';

import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Chart from './Chart/Chart';
import { DropdownMenu } from './Dropdown/Dropdown';

import arrow from '../images/arrow.svg';
import backArrow from '../images/arrow_180.svg';

import useStyles from './styles';

const Main = () => {
    const [activeBreakdownData, setActiveBreakdownData] = useState({
        data: "income",
        breakdown: "category",
        view: "absolute"
    });

    const classes = useStyles();
    // const dispatch = useDispatch();
    const store = useSelector((state) => state.reducer);

    const breakdownFilter = 
        <DropdownMenu
            move="#filter"
            main={
                [
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].data}: {store.dict[store.lang][activeBreakdownData.data]}
                        <img src={arrow} alt="arrow" width="20vw" height="20vw" />
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].breakdown}: {store.dict[store.lang][activeBreakdownData.breakdown]}
                        <img src={arrow} alt="arrow" width="20vw" height="20vw" />
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].view}: {store.dict[store.lang][activeBreakdownData.view]}
                        <img src={arrow} alt="arrow" width="20vw" height="20vw" />
                    </div>
                ] 
            }
            onClickMain={[{next: "A"}, {next: "B"}, {next: "C"}]}
            A={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {store.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].income}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].expenses}
                    </div>
                ]
            }
            onClickA={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, data: "income"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, data: "expenses"})}]}
            B={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {store.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].category}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].subcategory}
                    </div>
                ]
            }
            onClickB={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "category"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "subcategory"})}]}
            C={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {store.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].absolute}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {store.dict[store.lang].percentage}
                    </div>
                ]
            }
            onClickC={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, view: "absolute"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, view: "percentage"})}]}
            >
        </DropdownMenu>

    return (
        <div className={classes.background}>
            <NavBar />
            <Header fetchData={getHeader}/>
            <div className={classes.rowOne}>
                <div className={classes.twoCharts}>
                    <Chart id="1" chartType="balance" fetchData={getBalance}/>
                </div>
                <div className={classes.twoCharts}>
                    <Chart id="2" chartType="netIncome" fetchData={getNetIncome}/>
                </div>
            </div>
            <div className={classes.oneChart}>
                <Chart id="3" chartType="cashFlow" fetchData={getCashFlow}/>
            </div>
            <div className={classes.rowOne}>
                <div className={classes.twoChartsS}>
                    <Chart id="4" chartType="balance" fetchData={getBalance}/>
                </div>
                <div className={classes.twoChartsG}>
                    <Chart id="5" chartType="breakdown" fetchData={getCashFlow} filterMenu={breakdownFilter}/>
                </div>
            </div>
            {/* <div className={classes.oneChart}>
                <Dropdown />
            </div> */}
        </div>        
    );
}
 
export default Main;