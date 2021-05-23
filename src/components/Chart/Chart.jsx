import React, { useEffect, useRef } from 'react';
import { createBarChart } from '../../lib/charts'
// import '../css/Main.css'
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';

import { Dropdown } from '../Dropdown/Dropdown';

import { settings } from '../../settings/settings';

import filter from '../../images/filter.svg';


const Chart = ({ id, chartType, chartOptions, fetchData, filterMenu, filterState }) => {   
    
    const store = useSelector((state) => state.reducer);
    let chart = useRef(null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Fetching...');
        if(filterState !== undefined) {
            console.log(filterState);
            dispatch(fetchData(filterState));
        } else {
            dispatch(fetchData);
        }
        // console.log('Done');
    }, [dispatch, fetchData, filterState])

    useEffect(() => {
        if(chartOptions === 'incomeSubcategoryAbsolute') {
            console.log(chartOptions);
            console.log(settings.chartOptions[chartOptions]);
            console.log(store.data[chartType].data)
        }
        
        chart.current = createBarChart(id, store.data[chartType].data, settings.chartOptions[chartOptions], store.dict[store.lang].unit);
        return () => {
            // console.log('unmount')
            if (chart.current) {
                chart.current.dispose();
            }            
        }
    })


    return (
        <div>
            <div className={classes.titleBadge}>
                <div className={classes.filter}></div>
                <div className={classes.chartTitle}>{store.dict[store.lang][chartType]}</div>
                {filterMenu && <ul className={classes.filter}>
                    <Dropdown icon={<img src={filter} alt="filter" width="20vw" /> } move='#filter'>
                        {filterMenu}
                    </Dropdown>
                </ul>}
            </div> 
            <div id={id} className={classes.chart}></div>
            <div></div>
        </div>
    );
}
 
export default Chart;