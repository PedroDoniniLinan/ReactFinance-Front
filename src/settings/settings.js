import pt from '../dictionaries/pt-br.json';
import en from '../dictionaries/en-us.json';

const cashFlowOptions = {
    minValue: 0,
    predefined: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [
        // {name: 'avgIncome', format: " {valueY.formatNumber('#a')}", color: "#006633", fill: 0},
        // {name: 'avgExpenses', format: " {valueY.formatNumber('#a')}", color: "#990000", fill: 0}
    ],
    colSeries: [
        {name: 'income', color: ["#00cc66"]},
        {name: 'expenses', color: ["#ff3333"]}
    ]
}

const balanceOptions = {
    minValue: 0,
    predefined: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [
        {name: 'balance', color: "#00cc66", fill: 0.3}
    ],
    colSeries: []
}

const netIncomeOptions = {
    predefined: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'netIncome', color: ["#00cc66", "#ff3333"], fill: 0.3},
    ]
}

const incomeCategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Parents', color: ["#ff9933"]},
        {name: 'Investments', color: ["#ffdb4d"]},
        {name: 'Salary', color: ["#00cc66"]}
    ]
}

const incomeSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Support', color: ["#dd99ff"]},
        {name: 'Loan', color: ["#330066"]},
        {name: 'Salary', color: ["#00cc66"]},
        {name: 'Complement', color: ["#99ffdd"]},
        {name: 'Fixed Income', color: ["#4d79ff"]},
        {name: 'IVVB11', color: ["#ccff66"]},
        {name: 'BRAX11', color: ["#ffff66"]},
        {name: 'BBSD11', color: ["#cc9900"]},
        {name: 'MSFT34', color: ["#99ffff"]},
        {name: 'DISB34', color: ["#33ffff"]},
        {name: 'TSLA34', color: ["#00e6e6"]},
        {name: 'IRDM11', color: ["#99ccff"]},
        {name: 'BTC', color: ["#ff3333"]},
        {name: 'ETH', color: ["#ff9999"]},
    ]
}

const expensesCategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Taxes', color: ["#666666"]},
        {name: 'Loan', color: ["#ff3333"]},
        {name: 'Food', color: ["#00cc66"]},
        {name: 'Study', color: ["#b366ff"]},
        {name: 'Gift', color: ["#ff80bf"]},
        {name: 'Electronics', color: ["#668cff"]},
        {name: 'Travel', color: ["#ffdb4d"]},
        {name: 'Tour', color: ["#ff9933"]},
        {name: 'Health', color: ["#ffcccc"]},
    ]
}

const expensesSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Government', color: ["#ffffff"]},
        {name: 'Transaction', color: ["#999999"]},
        {name: 'Buy tax', color: ["#666666"]},
        {name: 'Lost', color: ["#000000"]},
        {name: 'Loan', color: ["#ffcccc"]},
        {name: 'Bill', color: ["#ff4d4d"]},
        {name: 'Debt', color: ["#cc0000"]},
        {name: 'Credit', color: ["#4d0000"]},
        {name: 'Eat out', color: ["#ccffdd"]},
        {name: 'Food', color: ["#66ff99"]},
        {name: 'Extra', color: ["#00e64d"]},
        {name: 'Mercado', color: ["#00802b"]},
        {name: 'Snack', color: ["#003311"]},
        {name: 'Documents', color: ["#b366ff"]},
        {name: 'Dasha', color: ["#ff99ff"]},
        {name: 'Parents', color: ["#660066"]},
        {name: 'Hardware', color: ["#b3c6ff"]},
        {name: 'Games', color: ["#668cff"]},
        {name: 'Hotel', color: ["#ffff99"]},
        {name: 'Flight', color: ["#ffff99"]},
        {name: 'Tour', color: ["#999900"]},
        {name: 'Transport', color: ["#333300"]},
        {name: 'Health', color: ["#ffcccc"]},
        {name: 'Gift', color: ["#ff66ff"]},
    ]
}


const dictionaries = {
    pt: pt,
    en: en
}

const incomeCategories = ['Parents', 'Salary', 'Investments'];
const expensesCategories = ['Taxes', 'Loan', 'Food', 'Study', 'Gift', 'Electronics', 'Travel', 'Tour', 'Health'];

export const settings = {
    chartOptions: {
        balance: balanceOptions,
        netIncome: netIncomeOptions,
        cashFlow: cashFlowOptions,

        incomeCategoryAbsolute: incomeCategory,
        incomeSubcategoryAbsolute: incomeSubcategory,
        expensesCategoryAbsolute: expensesCategory,
        expensesSubcategoryAbsolute: expensesSubcategory,
        incomeCategoryPercentage: {...incomeCategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        incomeSubcategoryPercentage: {...incomeSubcategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        expensesCategoryPercentage: {...expensesCategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        expensesSubcategoryPercentage: {...expensesSubcategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        
        incomeCategoryAbsoluteAgg: {...incomeCategory, xAxis: false},
        incomeSubcategoryAbsoluteAgg: {...incomeSubcategory, xAxis: false},
        expensesCategoryAbsoluteAgg: {...expensesCategory, xAxis: false},
        expensesSubcategoryAbsoluteAgg: {...expensesSubcategory, xAxis: false},
        incomeCategoryPercentageAgg: {...incomeCategory, xAxis: false, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        incomeSubcategoryPercentageAgg: {...incomeSubcategory, xAxis: false, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        expensesCategoryPercentageAgg: {...expensesCategory, xAxis: false, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        expensesSubcategoryPercentageAgg: {...expensesSubcategory, xAxis: false, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
    },
    dict: dictionaries,
    categories: {
        income: incomeCategories,
        expenses: expensesCategories
    }
};