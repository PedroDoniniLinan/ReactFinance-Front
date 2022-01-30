import React from 'react';

import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownMenu } from '../Dropdown/Dropdown';
import  { changeCategories, changeDateRange, changeLanguage } from '../../actions/actions';

import {ReactComponent as SettingsIcon} from '../../images/settings.svg';
import { settings } from '../../settings/settings';
import arrow from '../../images/arrow.svg';
import backArrow from '../../images/arrow_180.svg';
import check from '../../images/check.svg';
 

const NavBar = () => {
    const classes = useStyles();
    const store = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    // CATEGORIES FILTER
    const backArrowOption = 
    <div className={classes.dropdownItem}>
        <img src={backArrow} alt="barrow" width="20vw" height="20vw" />
        {settings.dict[store.lang].back}
    </div>;

    const selectAll = 
    <div className={classes.dropdownItem}>
            {'Select all'}
            {store.header.all && <img src={check} alt="check" width="10vw" height="10vw" style={{paddingLeft: "1vw"}} />}
    </div>;

    const categoriesFilter = settings.categories.allocation.map(c => 
        <div className={classes.dropdownItem}>
            {settings.dict[store.lang][c]}
            {store.header.category[c] && <img src={check} alt="check" width="10vw" height="10vw" style={{paddingLeft: "1vw"}} />}
        </div>
    );
    categoriesFilter.splice(0, 0, selectAll);
    categoriesFilter.splice(0, 0, backArrowOption);

    const categoriesActions = settings.categories.allocation.map(c => {
        return {
            next: "D", do: () => {
                let newCategory = store.header.category;
                newCategory[c] = !newCategory[c];
                dispatch(changeCategories({category: newCategory, all: store.header.all}))
            }
        }
    });
    categoriesActions.splice(0, 0, {
        next: "D", do: () => {
            let newCategory = store.header.category;        
            let newAll = !store.header.all;    
            settings.categories.allocation.map(c => { newCategory[c] = newAll; return 0;})
            dispatch(changeCategories({category: newCategory, all: newAll}))
        }
    });
    categoriesActions.splice(0, 0, {next: "main"});

    return(
        <nav className={classes.bar}>
            <div className={classes.title}><Link to="/Menu" className={classes.title}>ReactFinance</Link></div>
            <div className={classes.menu}>
                <ul className={classes.menuList}>
                    <Dropdown icon={<SettingsIcon/>} move='#'>
                        <DropdownMenu
                            main={
                                [
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].lang}: {store.dict[store.lang][store.lang]}
                                        <img src={arrow} alt="arrow" width="20vw"/>
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].dateRange}: {store.dict[store.lang][store.header.dateRange]}
                                        <img src={arrow} alt="arrow" width="20vw"/>
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {settings.dict[store.lang].categories}
                                        <img src={arrow} alt="arrow" width="20vw" height="20vw" />
                                    </div>,
                                ] 
                            }
                            onClickMain={[{next: "A"}, {next: "B"}, {next: "D"}]}
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
                            B={
                                [
                                    <div className={classes.dropdownItem}>
                                        <img src={backArrow} alt="barrow" width="20vw"/>
                                        {store.dict[store.lang].back}
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].Year}
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].Quarter}
                                    </div>,
                                    <div className={classes.dropdownItem}>
                                        {store.dict[store.lang].All}
                                    </div>
                                ]
                            }
                            onClickB={[{next: "main"}, {next: "main", do: () => dispatch(changeDateRange('Year'))}, {next: "main", do: () => dispatch(changeDateRange('Quarter'))}, {next: "main", do: () => dispatch(changeDateRange('All'))}]}
                            D={
                                categoriesFilter
                            }
                            onClickD={categoriesActions}
                            >
                        </DropdownMenu>
                    </Dropdown>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;