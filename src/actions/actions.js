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

export const getHeader = async (dispatch) => {
    try {
        const { data } = await api.fetchHeader();
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

export const getPortfolioHeader = async (dispatch) => {
    try {
        const { data } = await api.fetchPortfolioHeader();
        dispatch({ type: 'GET_HEADER', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllocation = (filter) => async (dispatch) => {
    try {
        
        const { data } = await api.fetchAllocation(filter.breakdown);
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

// export const createTest = (test) => async (dispatch) => {
//     try {
//         const { data } = await api.createTest(test);
//         dispatch({ type: 'CREATE', payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

