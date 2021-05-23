import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useStyles from './styles';

import wallet from '../../images/wallet.svg';
import stonks from '../../images/stonks.svg';
import { settings } from '../../settings/settings';

const Menu = () => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);

    return (
        <div>
            <div className={classes.row}>
                <div className={classes.button}>
                    <Link to="/Overview" className={classes.link}>
                        <img src={wallet} alt="wallet" width="200vw" height="200vw" />
                        <span>{settings.dict[store.lang].finances}</span>
                    </Link>
                </div>
                <div className={classes.button}>
                    <Link to="/Portfolio" className={classes.link}>
                        <img src={stonks} alt="stonks" width="200vw" height="200vw" />
                        <span>{settings.dict[store.lang].portfolio}</span>
                    </Link>
                </div>
                {/* <div className={classes.button}>
                    <img src={stonks} alt="stonks" width="200vw" height="200vw" />
                    <Link to="/Overview" className={classes.text}>Portfolio</Link>
                </div> */}
            </div>
            {/* <div className={classes.row}>
                <div className={classes.button}>
                    <Link to="/Overview" className={classes.text}>Overview</Link>
                </div>
                <div className={classes.button}>
                    <Link to="/Overview" className={classes.text}>Overview</Link>
                </div>
            </div> */}
        </div>        
    );
}
 
export default Menu;