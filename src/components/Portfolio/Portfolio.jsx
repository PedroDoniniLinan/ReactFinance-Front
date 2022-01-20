import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import  { getAllocation, getPortfolioHeader } from '../../actions/actions';

import Chart from '../Chart/Chart';
import Header from './Header/Header';
import { DropdownMenu } from '../Dropdown/Dropdown';

import useStyles from './styles';

import arrow from '../../images/arrow.svg';
import backArrow from '../../images/arrow_180.svg';
import check from '../../images/check.svg';

import { settings } from '../../settings/settings';
import { capitalize } from '../../lib/tools';

const Portfolio = () => {
    const store = useSelector((state) => state.reducer);
    const allocationCategories = Object.fromEntries(settings.categories.allocation.map(c => [c, true]));

    const [activeBreakdownData, setActiveBreakdownData] = useState({
        data: "allocation",
        breakdown: "category",
        view: "absolute",
        category: allocationCategories,
        all: true,
    });

    const classes = useStyles();

    // CATEGORIES FILTER
    const backArrowOption = 
    <div className={classes.dropdownItem}>
        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
        {settings.dict[store.lang].back}
    </div>;

    const selectAll = 
    <div className={classes.dropdownItem}>
            {'Select all'}
            {activeBreakdownData.all && <img src={check} alt="check" width="10vw" height="10vw" style={{paddingLeft: "1vw"}} />}
    </div>;

    const categoriesFilter = settings.categories[activeBreakdownData.data].map(c => 
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang][c]}
            {activeBreakdownData.category[c] && <img src={check} alt="check" width="10vw" height="10vw" style={{paddingLeft: "1vw"}} />}
        </div>
    );
    categoriesFilter.splice(0, 0, selectAll);
    categoriesFilter.splice(0, 0, backArrowOption);

    const categoriesActions = settings.categories[activeBreakdownData.data].map(c => {
        return {
            next: "D", do: () => {
                let newCategory = activeBreakdownData.category;
                newCategory[c] = !newCategory[c];
                setActiveBreakdownData({...activeBreakdownData, category: newCategory});
            }
        }
    });
    categoriesActions.splice(0, 0, {
        next: "D", do: () => {
            let newCategory = activeBreakdownData.category;        
            let newAll = !activeBreakdownData.all;    
            settings.categories[activeBreakdownData.data].map(c => { newCategory[c] = newAll; return 0;})
            setActiveBreakdownData({...activeBreakdownData, category: newCategory, all: newAll});
        }
    });
    categoriesActions.splice(0, 0, {next: "main"});

    // FILTER MENU
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
            onClickMain={[{next: "B"}, {next: "C"}, {next: "D"}]}
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
            onClickB={[{next: "main"}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "category", category: allocationCategories, all: true})}, {next: "main", do: () => setActiveBreakdownData({...activeBreakdownData, breakdown: "subcategory"})}]}
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
                activeBreakdownData.breakdown === 'subcategory' ? categoriesFilter : undefined
            }
            onClickD={activeBreakdownData.breakdown === 'subcategory' ? categoriesActions : undefined}
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