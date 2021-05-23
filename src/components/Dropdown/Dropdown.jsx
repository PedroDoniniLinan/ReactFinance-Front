// import React, { useEffect, useRef } from 'react';
import React, { useState } from 'react';
// import { 
//     useSelector
//     // , useDispatch 
// } from 'react-redux';

import useStyles from './styles';
import './style.css'
import { CSSTransition } from 'react-transition-group';

export const Dropdown = (props) => {   
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    return(
        <li className={classes.item}>
            <a href={props.move} className={classes.button} onClick={() => setOpen(!open)}>
                {props.icon}
                {/* {open && props.children} */}
            </a>

            {open && props.children}
        </li>
    )
}

export const DropdownMenu = (props) => {   
    const [activeMenu, setActiveMenu] = useState("main");
    const classes = useStyles();

    const DropdownItem = (props) => {   
        // const classes = useStyles();
    
        return(
            <a href={props.move} style={{textDecoration: "none"}} 
                onClick={() => {
                    props.goToMenu && setActiveMenu(props.goToMenu);
                    props.do && props.do();
                }}
            >
                {props.children}
            </a>
        )
    }

    return(
        <div className={classes.dropdownMenu}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.main.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickMain[i].next} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'A'}
                unmountOnExit
                timeout={500}
                classNames="menu-secundary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.A.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickA[i].next} do={props.onClickA[i].do} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>

            {props.B && <CSSTransition
                in={activeMenu === 'B'}
                unmountOnExit
                timeout={500}
                classNames="menu-secundary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.B.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickB[i].next} do={props.onClickB[i].do} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>}

            {props.C && <CSSTransition
                in={activeMenu === 'C'}
                unmountOnExit
                timeout={500}
                classNames="menu-secundary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.C.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickC[i].next} do={props.onClickC[i].do} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>}

            {props.D && <CSSTransition
                in={activeMenu === 'D'}
                unmountOnExit
                timeout={500}
                classNames="menu-secundary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.D.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickD[i].next} do={props.onClickD[i].do} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>}

            {props.E && <CSSTransition
                in={activeMenu === 'E'}
                unmountOnExit
                timeout={500}
                classNames="menu-secundary"
            >
                <ul style={{listStyleType: "none", paddingInline: "0px", marginInline: "0px", margin: "0px", marginBlock: "0px"}}>
                    {props.E.map((option, i) => 
                        <li>
                            <DropdownItem goToMenu={props.onClickE[i].next} do={props.onClickE[i].do} move={props.move}>
                                {option}
                            </DropdownItem>
                        </li>
                    )}
                </ul>
            </CSSTransition>}
        </div>
    )
}


 
 
