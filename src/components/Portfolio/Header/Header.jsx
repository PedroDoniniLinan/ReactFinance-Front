import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nFormatter } from '../../../lib/tools'
import useStyles from './styles';

const Header = ({ fetchData }) => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('Fetching...');
       dispatch(fetchData);
        // console.log('Done');
    }, [dispatch, fetchData])
    
    const dict = store.dict[store.lang];
    const header = store.data.header;
    const unit = dict.unit;

    return (
        <div className={classes.header}>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.balance}</div>
                <div>{unit + nFormatter(header.balance, 1)}</div>
            </div>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.avgNetIncome}</div>
                <div>{unit + nFormatter(header.avgNetIncome, 1)}</div>
            </div>
            <div className={classes.headerNumber}>
                <div className={classes.headerTitle}>{dict.profitMargin}</div>
                <div>{nFormatter(100 * header.profitMargin, 1)} %</div>
            </div>
        </div>
    );
}
 
export default Header;