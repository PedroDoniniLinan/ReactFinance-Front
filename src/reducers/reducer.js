import pt from '../dictionaries/pt-br.json';
import en from '../dictionaries/en-us.json';
import { settings } from '../settings/settings';

const dictionaries = {
    pt: pt,
    en: en
}

const headerInit = ['','','']
const allocationCategories = Object.fromEntries(settings.categories.allocation.map(c => [c, true]));

const initialState = {
    lang: 'en',
    dict: dictionaries,
    header: {
        dateRange: 'Year',
        category: allocationCategories,
        all: true,
    },
    data: {
        header: headerInit,
        balance: {
            data: [],
        },
        netIncome: {
            data: [],
        },
        cashFlow: {
            data: [],
        },
        breakdown: {
            data: [],
        },
        allocation: {
            data: [],
        }
    },
    test: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_LANG":
            // console.log(action);
            return {
                ...state,  
                lang: action.payload
            };
        case "CHANGE_DATE_RANGE":
            // console.log(action);
            return {
                ...state,  
                header: {
                    ...state.header,
                    dateRange: action.payload
                }
            };
        case "CHANGE_CATEGORIES":
            console.log('Action!');
            console.log({
                ...state,  
                header: {
                    ...state.header,
                    category: action.payload.category,
                    all: action.payload.all
                }});
            return {
                ...state,  
                header: {
                    ...state.header,
                    category: action.payload.category,
                    all: action.payload.all
                }
            };
        case "GET_RECORDS":
            // console.log(action);
            return state;
        case "GET_HEADER":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    header: action.payload
                }
            };
        case "GET_NET_INCOME":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    netIncome: {
                        ...state.data.netIncome, 
                        data: action.payload
                    }
                }
            };
        case "GET_BALANCE":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    balance: {
                        ...state.data.balance, 
                        data: action.payload
                    }
                }
            };
        case "GET_CASHFLOW":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    cashFlow: {
                        ...state.data.cashFlow, 
                        data: action.payload
                    }
                }
            };
        case "GET_CASHFLOW_CATEGORY":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    breakdown: {
                        ...state.data.breakdown, 
                        data: action.payload
                    }
                }
            };
        case "GET_ALLOCATION":
            // console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    allocation: {
                        ...state.data.allocation, 
                        data: action.payload
                    }
                }
            };
        default:
            console.log('default action');
            return state;
    }
}

export default reducer;