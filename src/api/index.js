import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchRecords = () => axios.get(url);
export const fetchNetIncome = () => axios.get(url + "netIncome");
export const fetchBalance = () => axios.get(url + "balance");
export const fetchCashFlow = () => axios.get(url + "cashFlow");

export const fetchHeader = (dateRange) => {
    let route = dateRange !== undefined ? url + "header?dateRange=" + dateRange : url + "header";
    return axios.get(route);
};

export const fetchIncomeCategory = (aggregation) => {
    let route = aggregation !== undefined ? url + "incomeCategory?aggregation=" + aggregation : url + "incomeCategory";
    return axios.get(route);
};

export const fetchExpensesCategory = (aggregation) => {
    let route = aggregation !== undefined ? url + "expensesCategory?aggregation=" + aggregation : url + "expensesCategory";
    return axios.get(route);
};

export const fetchIncomeSubcategory = (aggregation, categories) => {
    let route = url + "incomeSubcategory";
    route = aggregation !== undefined ? route + "?aggregation=" + aggregation : route;
    if(categories !== undefined)
        route = aggregation !== undefined ? route + "&categories=[" + categories.map(c => '"'+ c +'"').join() + "]" : route + "?categories=[" + categories.map(c => '"'+ c +'"').join() + "]";
    console.log(route);
    return axios.get(route);
};

export const fetchExpensesSubcategory = (aggregation, categories) => {
    let route = url + "expensesSubcategory";
    route = aggregation !== undefined ? route + "?aggregation=" + aggregation : route;
    if(categories !== undefined)
        route = aggregation !== undefined ? route + "&categories=[" + categories.map(c => '"'+ c +'"').join() + "]" : route + "?categories=[" + categories.map(c => '"'+ c +'"').join() + "]";
    return axios.get(route);    
};

export const fetchPortfolioHeader = (dateRange, categories, subcategories) => {
    console.log('categories');
    console.log(categories);
    let route = dateRange !== undefined ? url + "portfolioHeader?dateRange=" + dateRange : url + "portfolioHeader";
    route += categories !== undefined ? (dateRange !== undefined ? "&" : "?") + "categories=[" + categories.map(c => '"'+ c +'"').join() + "]" : "";
    route += subcategories !== undefined ? (dateRange !== undefined ? "&" : "?") + "subcategories=[" + categories.map(c => '"'+ c +'"').join() + "]"  : "";
    console.log(route);
    return axios.get(route);
};

export const fetchAllocation = (breakdown, categories) => {
    let route = breakdown !== undefined ? url + "allocation?breakdown=" + breakdown : url + "allocation";
    if(categories !== undefined)
        route = breakdown !== undefined ? route + "&categories=[" + categories.map(c => '"'+ c +'"').join() + "]" : route + "?categories=[" + categories.map(c => '"'+ c +'"').join() + "]";
    console.log(route);
    console.log(categories);
    return axios.get(route);
};
// export const createTest = (newTest) => axios.post(url, newTest);