import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import  { getBalance, getCashFlow, getNetIncome, getHeader, getBreakdown } from '../../actions/actions';

import Header from './Header/Header';
import Chart from '../Chart/Chart';
import { DropdownMenu } from '../Dropdown/Dropdown';

import arrow from '../../images/arrow.svg';
import backArrow from '../../images/arrow_180.svg';
import check from '../../images/check.svg';

import useStyles from './styles';

import { settings } from '../../settings/settings';
import { capitalize } from '../../lib/tools';


const Overview = () => {
    const store = useSelector((state) => state.reducer);
    const incomeCategoriesState = Object.fromEntries(settings.categories.income.map(c => [c, true]));
    const expensesCategoriesState = Object.fromEntries(settings.categories.expenses.map(c => [c, true]));

    const [activeBreakdownData, setActiveBreakdownData] = useState({
        data: "income",
        breakdown: "category",
        view: "absolute",
        aggregation: "monthly",
        category: incomeCategoriesState,
    });

    const classes = useStyles();
    // const dispatch = useDispatch();

    const backArrowOption = 
        <div className={classes.dropdownItem}>
            <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
            {settings.dict[store.lang].back}
        </div>;

    const categoriesFilter = settings.categories[activeBreakdownData.data].map(c => 
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang][c]}
            {activeBreakdownData.category[c] && <img src={check} alt="check" width="10vw" height="10vw" style={{paddingLeft: "1vw"}} />}
        </div>
    );
    categoriesFilter.splice(0, 0, backArrowOption);

    const categoriesActions = settings.categories[activeBreakdownData.data].map(c => {
        return {
            next: "E", do: () => {
                let newCategory = activeBreakdownData.category;
                newCategory[c] = !newCategory[c];
                setActiveBreakdownData({...activeBreakdownData, caegory: newCategory});
            }
        }
    });
    categoriesActions.splice(0, 0, {next: "main"});

    const mainMenu = [
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].data}: {settings.dict[store.lang][activeBreakdownData.data]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].breakdown}: {settings.dict[store.lang][activeBreakdownData.breakdown]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].view}: {settings.dict[store.lang][activeBreakdownData.view]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].aggregation}: {settings.dict[store.lang][activeBreakdownData.aggregation]}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>,
    ] 

    if(activeBreakdownData.breakdown === 'subcategory') {
        mainMenu.splice(4, 0, 
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang].categories}
            <img src={arrow} alt="arrow" width="20vw" height="20vw" />
        </div>)
    }

    const breakdownFilter = 
        <DropdownMenu
            move="#filter"
            main={
                mainMenu
            }
            onClickMain={[{next: "A"}, {next: "B"}, {next: "C"}, {next: "D"}, {next: "E"}]}
            A={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {settings.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].income}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].expenses}
                    </div>
                ]
            }
            onClickA={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, data: "income", category: incomeCategoriesState})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, data: "expenses", category: expensesCategoriesState})}]}
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
            D={
                [
                    <div className={classes.dropdownItem}>
                        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
                        {settings.dict[store.lang].back}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].monthly}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].quaterly}
                    </div>,
                    <div className={classes.dropdownItem}>
                        {settings.dict[store.lang].yearly}
                    </div>
                ]
            }
            onClickD={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, aggregation: "monthly"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, aggregation: "quaterly"})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, aggregation: "yearly"})}]}
            E={
                activeBreakdownData.breakdown === 'subcategory' ? categoriesFilter : undefined
            }
            onClickE={activeBreakdownData.breakdown === 'subcategory' ? categoriesActions : undefined}
            >
        </DropdownMenu>

    return (
        <div className={classes.background}>
            {/* <NavBar /> */}
            <Header fetchData={getHeader}/>
            <div className={classes.rowOne}>
                <div className={classes.twoCharts}>
                    <Chart id="1" chartType="balance" chartOptions="balance" fetchData={getBalance}/>
                </div>
                <div className={classes.twoCharts}>
                    <Chart id="2" chartType="netIncome" chartOptions="netIncome" fetchData={getNetIncome}/>
                </div>
            </div>
            <div className={classes.oneChart}>
                <Chart id="3" chartType="cashFlow" chartOptions="cashFlow" fetchData={getCashFlow}/>
            </div>
            <div className={classes.oneChartTwo}>
                <Chart 
                    id="4" 
                    chartType="breakdown" 
                    chartOptions={activeBreakdownData.data + capitalize(activeBreakdownData.breakdown) + capitalize(activeBreakdownData.view)} 
                    fetchData={getBreakdown} 
                    filterMenu={breakdownFilter} 
                    filterState={activeBreakdownData}/>
            </div>
        </div>        
    );
}
 
export default Overview;