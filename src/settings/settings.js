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
        {name: 'Salary', color: ["#00cc66"]},
        {name: 'Taxes', color: ["#668cff"]}
    ]
}

const incomeSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Taxes', color: ["#668cff"]},
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
        {name: 'Clothes', color: ["#99ff99"]},
        {name: 'Education', color: ["#b366ff"]},
        {name: 'Bureaucracy', color: ["#b366ff"]},
        {name: 'Gift', color: ["#ff80bf"]},
        {name: 'Electronics', color: ["#668cff"]},
        {name: 'Travel', color: ["#ffdb4d"]},
        {name: 'Transport', color: ["#ff9933"]},
        {name: 'Tour', color: ["#80ffff"]},
        {name: 'Home', color: ["#660066"]},
        {name: 'Health', color: ["#ffcccc"]},
    ]
}

const expensesSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Electricity', color: ["#ff4d4d"]},
        {name: 'Infra', color: ["#d27979"]},
        {name: 'Insurance', color: ["#732626"]},
        {name: 'Internet', color: ["#6699ff"]},
        {name: 'Rent', color: ["#002b80"]},
        {name: 'Uber', color: ["#dddddd"]},
        {name: 'Gas', color: ["#33334d"]},
        {name: 'Public transport', color: ["#ffffff"]},
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
        {name: 'Supermarket', color: ["#00802b"]},
        {name: 'Snack', color: ["#003311"]},
        {name: 'Socks', color: ["#66ff99"]},
        {name: 'Printing', color: ["#b366ff"]},
        {name: 'Documents', color: ["#666699"]},
        {name: 'Dasha', color: ["#ff99ff"]},
        {name: 'Parents', color: ["#660066"]},
        {name: 'Hardware', color: ["#b3c6ff"]},
        {name: 'Games', color: ["#668cff"]},
        {name: 'Hotel', color: ["#ffff99"]},
        {name: 'Flight', color: ["#ffff99"]},
        {name: 'Tour', color: ["#999900"]},
        {name: 'Transport', color: ["#333300"]},
        {name: 'Supermarket (Travel)', color: ["#bfff80"]},
        {name: 'Extra', color: ["#1a1300"]},
        {name: 'Basic tour', color: ["#80ffff"]},
        {name: 'Small trip', color: ["#00cccc"]},
        {name: 'Estetic', color: ["#f2d9e6"]},
        {name: 'Pharmacy', color: ["#cc6699"]},
        {name: 'Doctor', color: ["#862d59"]},
        {name: 'Gift', color: ["#ff66ff"]},
    ]
}

const allocationCategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Real state', color: ["#99ccff"]},
        {name: 'US growth', color: ["#ffdb4d"]},
        {name: 'US super growth', color: ["#00e6e6"]},
        {name: 'BR growth', color: ["#ffff66"]},
        {name: 'Crypto', color: ["#ff3333"]},
        {name: 'Fixed income', color: ["#4d79ff"]}
    ]
}

const allocationSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Support', color: ["#dd99ff"]},
        {name: 'Loan', color: ["#330066"]},
        {name: 'Salary', color: ["#00cc66"]},
        {name: 'Complement', color: ["#99ffdd"]},
        {name: 'Nu', color: ["#4d79ff"]},
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

const dictionaries = {
    pt: pt,
    en: en
}

const incomeCategories = ['Parents', 'Salary', 'Investments', 'Taxes'];
const expensesCategories = ['Taxes', 'Loan', 'Food', 'Clothes', 'Education', 'Bureaucracy', 'Gift', 'Electronics', 'Transport', 'Home', 'Travel', 'Tour', 'Health'];

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
        
        allocationCategoryAbsolute: allocationCategory,
        allocationSubcategoryAbsolute: allocationSubcategory,
        allocationCategoryPercentage: {...allocationCategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
        allocationSubcategoryPercentage: {...allocationSubcategory, distribution: true, format: " {valueY.totalPercent.formatNumber('#.00')}%" },
    },
    dict: dictionaries,
    categories: {
        income: incomeCategories,
        expenses: expensesCategories
    }
};