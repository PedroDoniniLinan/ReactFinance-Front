import React, { useEffect, useRef } from 'react';
import { createBarChart } from '../../lib/charts'
// import '../css/Main.css'
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';

const Chart = ({ id, chartType, dataFetch }) => {   
    
    const store = useSelector((state) => state.reducer);
    let chart = useRef(null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Fetching...');
       dispatch(dataFetch);
        console.log('Done');
    }, [dispatch, dataFetch])

    useEffect(() => {
        console.log(chartType)
        console.log('Building chart...');
        console.log(store.data[chartType].data);
        chart.current = createBarChart(id, store.data[chartType].data, store.data[chartType].options, store.dict[store.lang].unit);
        console.log(chart.current.data);
        return () => {
            console.log('unmount')
            if (chart.current) {
                chart.current.dispose();
            }            
        }
    })


    return (
        <div>
            <div className={classes.titleBadge}>
                <span className={classes.chartTitle}>{store.dict[store.lang][chartType]}</span>
            </div> 
            <div id={id} className={classes.chart}></div>
            <div></div>
        </div>
    );
}
 
export default Chart;