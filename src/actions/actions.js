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

// export const createTest = (test) => async (dispatch) => {
//     try {
//         const { data } = await api.createTest(test);
//         dispatch({ type: 'CREATE', payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// }

