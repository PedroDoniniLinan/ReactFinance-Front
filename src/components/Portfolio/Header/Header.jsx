import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nFormatter } from '../../../lib/tools'
import useStyles from './styles';

const Header = ({ fetchData, filterState }) => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('Fetching...');
       dispatch(fetchData(filterState));
        // console.log('Done');
    }, [dispatch, fetchData, filterState])
    
    const dict = store.dict[store.lang];
    const header = store.data.header;
    const unit = dict.unit;

    return (
        <div className={classes.header}>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.totalProfit}</div>
                <div>{unit + nFormatter(header[0], 1)}</div>
            </div>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.avgYield}</div>
                <div>{unit + nFormatter(header[1], 1)}</div>
            </div>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.yield}</div>
                <div>{nFormatter(100 * header[2], 1)} %</div>
            </div>
        </div>
    );
}
 
export default Header;