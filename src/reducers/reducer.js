import pt from '../dictionaries/pt-br.json';
import en from '../dictionaries/en-us.json';

const mockData = [
    {date: new Date(2020, 1, 1), income: 220, expenses: 100, avgIncome: 200, avgExpenses: 100},
    {date: new Date(2020, 2, 1), income: 220, expenses: 100, avgIncome: 220, avgExpenses: 100},
    {date: new Date(2020, 3, 1), income: 300, expenses: 80, avgIncome: 260, avgExpenses: 90},
    {date: new Date(2020, 4, 1), income: 200, expenses: 220, avgIncome: 240, avgExpenses: 180},
    {date: new Date(2020, 5, 1), income: 220, expenses: 100, avgIncome: 230, avgExpenses: 140},
    {date: new Date(2020, 6, 1), income: 220, expenses: 100, avgIncome: 220, avgExpenses: 120},
    {date: new Date(2020, 7, 1), income: 300, expenses: 80, avgIncome: 250, avgExpenses: 100},
    {date: new Date(2020, 8, 1), income: 200, expenses: 220, avgIncome: 230, avgExpenses: 180},
    {date: new Date(2020, 9, 1), income: 220, expenses: 100, avgIncome: 220, avgExpenses: 140},
    {date: new Date(2020, 10, 1), income: 300, expenses: 80, avgIncome: 250, avgExpenses: 100},
    {date: new Date(2020, 11, 1), income: 200, expenses: 220, avgIncome: 230, avgExpenses: 180},
    {date: new Date(2021, 0, 1), income: 500, expenses: 150, avgIncome: 400, avgExpenses: 160},
    {date: new Date(2021, 1, 1), income: 250, expenses: 110, avgIncome: 300, avgExpenses: 140},
    {date: new Date(2021, 2, 1), income: 300, expenses: 200, avgIncome: 280, avgExpenses: 190},
];

const mockData2 = [
    {date: new Date(2020, 1, 1), balance: 90000},
    {date: new Date(2020, 2, 1), balance: 90000},
    {date: new Date(2020, 3, 1), balance: 90000},
    {date: new Date(2020, 4, 1), balance: 90000},
    {date: new Date(2020, 5, 1), balance: 90000},
    {date: new Date(2020, 6, 1), balance: 90000},
    {date: new Date(2020, 7, 1), balance: 90000},
    {date: new Date(2020, 8, 1), balance: 90000},
    {date: new Date(2020, 9, 1), balance: 90000},
    {date: new Date(2020, 10, 1), balance: 96000},
    {date: new Date(2020, 11, 1), balance: 101000},
    {date: new Date(2021, 0, 1), balance: 109000},
    {date: new Date(2021, 1, 1), balance: 110000},
    {date: new Date(2021, 2, 1), balance: 115000},
];

// const mockData3 = mockData.map(data => {
//     return {date: data.date, netIncome: data.income - data.expenses}
// })

const cashFlowOptions = {
    minValue: 0,
    lineSeries: [
        // {name: 'avgIncome', format: " {valueY.formatNumber('#a')}", color: "#006633", fill: 0},
        // {name: 'avgExpenses', format: " {valueY.formatNumber('#a')}", color: "#990000", fill: 0}
    ],
    colSeries: [
        {name: 'income', format: " {valueY.formatNumber('#.0a')}", color: ["#00cc66"]},
        {name: 'expenses', format: " {valueY.formatNumber('#.0a')}", color: ["#ff3333"]}
    ]
}

const balanceOptions = {
    minValue: 0,
    lineSeries: [
        {name: 'balance', format: " {valueY.formatNumber('#.0a')}", color: "#00cc66", fill: 0.3}
    ],
    colSeries: []
}

const netIncomeOptions = {
    lineSeries: [],
    colSeries: [
        {name: 'netIncome', format: " {valueY.formatNumber('#.0a')}", color: ["#00cc66", "#ff3333"], fill: 0.3},
    ]
}


const dictionaries = {
    pt: pt,
    en: en
}

const header = {
    balance:115021,
    avgNetIncome:5500,
    profitMargin: 0.823
}

const initialState = {
    lang: 'pt',
    dict: dictionaries,
    data: {
        header: header,
        balance: {
            data: mockData2,
            options: balanceOptions
        },
        netIncome: {
            data: [],
            options: netIncomeOptions,
        },
        cashFlow: {
            data: mockData,
            options: cashFlowOptions,
        }
    },
    test: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_RECORDS":
            console.log(action);
            return state;
        case "GET_HEADER":
            console.log(action);
            return {
                ...state,  
                data: {
                    ...state.data, 
                    header: action.payload
                }
            };
        case "GET_NET_INCOME":
            console.log(action);
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
            console.log(action);
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
            console.log(action);
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
        default:
            console.log('default action');
            return state;
    }
}

export default reducer;