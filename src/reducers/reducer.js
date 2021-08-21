import pt from '../dictionaries/pt-br.json';
import en from '../dictionaries/en-us.json';


const dictionaries = {
    pt: pt,
    en: en
}

const header = ['','','']

const initialState = {
    lang: 'en',
    dict: dictionaries,
    data: {
        header: header,
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