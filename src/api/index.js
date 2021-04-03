import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchRecords = () => axios.get(url);
export const fetchNetIncome = () => axios.get(url + "netIncome");
export const fetchBalance = () => axios.get(url + "balance");
export const fetchCashFlow = () => axios.get(url + "cashFlow");

// export const createTest = (newTest) => axios.post(url, newTest);