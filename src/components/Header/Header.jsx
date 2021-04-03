import React from 'react';
import { useSelector } from 'react-redux';

import { nFormatter } from '../../lib/tools';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);
    
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
                <div>{100 * header.profitMargin.toFixed(3)} %</div>
            </div>
        </div>
    );
}
 
export default Header;