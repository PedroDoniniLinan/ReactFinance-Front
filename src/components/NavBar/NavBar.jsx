import React from 'react';

import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();

    return(
        <div className={classes.bar}>
            <span className={classes.title}>ReactFinance</span>
        </div>
    );
}
 
export default NavBar;