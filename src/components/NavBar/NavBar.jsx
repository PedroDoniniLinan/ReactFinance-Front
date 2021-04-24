import React from 'react';

import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { Dropdown, DropdownMenu } from '../Dropdown/Dropdown';
import  { changeLanguage } from '../../actions/actions';

import {ReactComponent as SettingsIcon} from '../../images/settings.svg';
import arrow from '../../images/arrow.svg';
import backArrow from '../../images/arrow_180.svg';
 

const NavBar = () => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    return(
        <nav className={classes.bar}>
            <div className={classes.title}>ReactFinance</div>
            <div className={classes.menu}>
                <ul className={classes.menuList}>
                    <Dropdown icon={<SettingsIcon/>} move='#'>
                        <DropdownMenu
                            main={
                                [
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].lang}: {store.dict[store.lang][store.lang]}
                                        <img src={arrow} alt="arrow" width="20vw"/>
                                    </div>
                                ] 
                            }
                            onClickMain={[{next: "A"}]}
                            A={
                                [
                                    <div className={classes.dropdownItem}>
                                        <img src={backArrow} alt="barrow" width="20vw"/>
                                        {store.dict[store.lang].back}
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].en}
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].pt}
                                    </div>
                                ]
                            }
                            onClickA={[{next: "main"}, {next: "main", do: () => dispatch(changeLanguage('en'))}, {next: "main", do: () => dispatch(changeLanguage('pt'))}]}
                            >
                        </DropdownMenu>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;