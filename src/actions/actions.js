import * as api from '../api';

// Action creators

export const getRecord = async (dispatch) => {
    try {
        const { data } = await api.fetchRecords();
        dispatch({ type: 'GET_RECORDS', payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const getHeader = (filter) => async (dispatch) => {
    try {
        const { data } = await api.fetchHeader(filter.dateRange);
        dispatch({ type: 'GET_HEADER', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getNetIncome = async (dispatch) => {
    try {
        const { data } = await api.fetchNetIncome();
        dispatch({ type: 'GET_NET_INCOME', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getBalance = async (dispatch) => {
    try {
        const { data } = await api.fetchBalance();
        dispatch({ type: 'GET_BALANCE', payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const getCashFlow = async (dispatch) => {
    try {
        const { data } = await api.fetchCashFlow();
        dispatch({ type: 'GET_CASHFLOW', payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const getBreakdown = (filter) => async (dispatch) => {
    try {
        if(filter.data === 'income' && filter.breakdown === 'category') {
            const { data } = await api.fetchIncomeCategory(filter.aggregation);
            dispatch({ type: 'GET_CASHFLOW_CATEGORY', payload: data});
        } else if(filter.data === 'income' && filter.breakdown === 'subcategory') {
            const { data } = await api.fetchIncomeSubcategory(filter.aggregation, Object.keys(filter.category).filter(c => filter.category[c]));
            dispatch({ type: 'GET_CASHFLOW_CATEGORY', payload: data});
        } else if(filter.data === 'expenses' && filter.breakdown === 'category') {
            const { data } = await api.fetchExpensesCategory(filter.aggregation);
            dispatch({ type: 'GET_CASHFLOW_CATEGORY', payload: data});
        } else {
            const { data } = await api.fetchExpensesSubcategory(filter.aggregation, Object.keys(filter.category).filter(c => filter.category[c]));
            dispatch({ type: 'GET_CASHFLOW_CATEGORY', payload: data});
        }
    } catch (error) {
        console.log(error.message);
    }

}

export const getPortfolioHeader = (filter) => async (dispatch) => {
    try {
        console.log(filter.category)
        console.log(Object.keys(filter.category))
        console.log(Object.keys(filter.category).filter(c => filter.category[c]))
        const { data } = await api.fetchPortfolioHeader(filter.dateRange, Object.keys(filter.category).filter(c => filter.category[c]), Object.keys(filter.category).filter(c => filter.category[c]));
        dispatch({ type: 'GET_HEADER', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllocation = (filter) => async (dispatch) => {
    try {
        
        const { data } = await api.fetchAllocation(filter.breakdown, Object.keys(filter.category).filter(c => filter.category[c]));
        dispatch({ type: 'GET_ALLOCATION', payload: data});

    } catch (error) {
        console.log(error.message);
    }

}

export const changeLanguage = (lang) => (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_LANG', payload: lang });
    } catch (error) {
        console.log(error.message);
    }
}

export const changeDateRange = (dateRange) => (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_DATE_RANGE', payload: dateRange });
    } catch (error) {
        console.log(error.message);
    }
}

export const changeCategories = (dateRange) => (dispatch) => {
    try {
        dispatch({ type: 'CHANGE_CATEGORIES', payload: dateRange });
    } catch (error) {
        console.log(error.message);
    }
}

// export const createTest = (test) => async (dispatch) => {
//     try {
//         const { data } = await api.createTest(test);
//         dispatch({ type: 'CREATE', payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

