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
        {name: 'Stocks', color: ["#ffdb4d"]},
        {name: 'Fixed income', color: ["#b3ffe6"]},
        {name: 'Crypto', color: ["#ff6666"]},
        {name: 'Stablecoin', color: ["#ffbb99"]},
        {name: 'Salary', color: ["#00cc66"]},
        {name: 'Cash', color: ["#b3ffb3"]},
        {name: 'Taxes', color: ["#b3b3b3"]},
        {name: 'NFT games', color: ["#668cff"]},
        {name: 'Total', color: ["#ff9933"]},
    ]
}

const incomeSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        // Parents
        {name: 'Support', color: ["#dd99ff"]},
        {name: 'Loan', color: ["#330066"]},
        // Taxes
        {name: 'Taxes', color: ["#b3b3b3"]},
        // Salary
        {name: 'Salary', color: ["#00cc66"]},
        {name: 'Complement', color: ["#99ffdd"]},
        // Cash
        {name: 'EUR', color: ["#b3ecff"]},
        {name: 'BRL', color: ["#b3ffb3"]},
        // Fixed Income
        {name: 'Fixed income', color: ["#bf80ff"]},
        // Stocks
        {name: 'IVVB11', color: ["#3366ff"]},
        {name: 'MSFT34', color: ["#24478f"]},
        {name: 'GOGL34', color: ["#4775d1"]},
        {name: 'FBOK34', color: ["#8080ff"]},
        {name: 'AMZO34', color: ["#99b3e6"]},
        {name: 'DISB34', color: ["#eaf0fa"]},
        {name: 'TSLA34', color: ["#80dfff"]},
        {name: 'MSBR34', color: ["#66ff99"]},
        {name: 'JPMC34', color: ["#66ff99"]},
        {name: 'BRAX11', color: ["#ffff66"]},
        {name: 'BBSD11', color: ["#cc9900"]},
        {name: 'IRDM11', color: ["#b3b3b3"]},
        {name: 'MTD', color: ["#ccf2ff"]},
        {name: 'MTF', color: ["#80dfff"]},
        {name: 'UST', color: ["#0039e6"]},
        {name: 'RUS', color: ["#ffffff"]},
        {name: 'SXLU', color: ["#99ffcc"]},
        {name: 'PHPD', color: ["#b3b3cc"]},
        // Crypto
        {name: 'BTC', color: ["#ffcc00"]},
        {name: 'ETH', color: ["#666699"]},
        {name: 'ADA', color: ["#000066"]},
        {name: 'AVAX', color: ["#ff1a1a"]},
        {name: 'SOL', color: ["#a64dff"]},
        {name: 'BNB', color: ["#ffff66"]},
        {name: 'MATIC', color: ["#8600b3"]},
        {name: 'DOT', color: ["#ff33ff"]},
        {name: 'SHIB', color: ["#ff6600"]},
        {name: 'SAND', color: ["#66d9ff"]},
        // NFT games
        {name: 'Axie', color: ["#4d79ff"]},
        {name: 'Star atlas', color: ["#1a1a1a"]},
        {name: 'Thetan', color: ["#ff751a"]},
        {name: 'Defina', color: ["#668cff"]},
        {name: 'AXS', color: ["#668cff"]},
        {name: 'SLP', color: ["#ffb3ff"]},
        {name: 'ATLAS', color: ["#a6a6a6"]},
        {name: 'POLIS', color: ["#666666"]},
        {name: 'THC', color: ["#ffa64d"]},
        {name: 'THG', color: ["#ffcc99"]},
        {name: 'FINA', color: ["#ffff99"]},
        // Stablecoin
        {name: 'USDT', color: ["#00cc99"]},
        {name: 'BUSD', color: ["#ffbf00"]},
        {name: 'USDC', color: ["#3939c6"]},
        {name: 'Total', color: ["#ff9933"]},
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
        // {name: 'Education', color: ["#b366ff"]},
        {name: 'Utility', color: ["#b366ff"]},
        {name: 'Bureaucracy', color: ["#47476b"]},
        {name: 'Services', color: ["#ecb3ff"]},
        {name: 'Gift', color: ["#ff80bf"]},
        {name: 'Electronics', color: ["#3333cc"]},
        {name: 'NFT games', color: ["#668cff"]},
        {name: 'Salary', color: ["#ff8080"]},
        {name: 'Travel', color: ["#ffdb4d"]},
        {name: 'Transport', color: ["#ff9933"]},
        {name: 'Tour', color: ["#80ffff"]},
        {name: 'Home', color: ["#621e1e"]},
        {name: 'Health', color: ["#ffcccc"]},
        {name: 'Total', color: ["#ff9933"]},
    ]
}

const expensesSubcategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        // Home
        {name: 'Gas', color: ["#f9ecec"]},
        {name: 'Water', color: ["#edc5c5"]},
        {name: 'Electricity', color: ["#f9ecec"]},
        {name: 'Infra', color: ["#d27979"]},
        {name: 'Internet', color: ["#cf6363"]},
        {name: 'Rent', color: ["#621e1e"]},
        {name: 'Insurance', color: ["#3b1212"]},
        // Transport
        {name: 'Uber', color: ["#dddddd"]},
        {name: 'Fuel', color: ["#1a1a1a"]},
        {name: 'Parking', color: ["#1a1a1a"]},
        {name: 'Public transport', color: ["#ffffff"]},
        // Taxes
        {name: 'Government', color: ["#ffffff"]},
        {name: 'Transaction', color: ["#999999"]},
        {name: 'Buy tax', color: ["#666666"]},
        {name: 'Lost', color: ["#000000"]},
        {name: 'Gas fee', color: ["#33334d"]},
        // Loan
        {name: 'Loan', color: ["#ffcccc"]},
        {name: 'Bill', color: ["#ff4d4d"]},
        {name: 'Debt', color: ["#cc0000"]},
        {name: 'Credit', color: ["#4d0000"]},
        // Food
        {name: 'Eat out', color: ["#ccffdd"]},
        {name: 'Food', color: ["#66ff99"]},
        {name: 'Supermarket', color: ["#00802b"]},
        {name: 'Home meal', color: ["#66ff99"]},
        {name: 'Snack', color: ["#003311"]},
        // Bureaucracy
        {name: 'Documents', color: ["#47476b"]},
        // Services
        {name: 'Leisure', color: ["#ecb3ff"]},
        // Gift
        {name: 'Dasha', color: ["#ff99ff"]},
        {name: 'Parents', color: ["#660066"]},
        {name: 'Other people', color: ["#993399"]},
        // Electronics
        {name: 'Hardware', color: ["#b3c6ff"]},
        {name: 'Games', color: ["#668cff"]},
        {name: 'Phone', color: ["#002699"]},
        {name: 'Peripherals', color: ["#e6ecff"]},
        // NFT games
        {name: 'Axie', color: ["#4d79ff"]},
        {name: 'Axie Breeding', color: ["#0040ff"]},
        {name: 'LP', color: ["#6666ff"]},
        {name: 'Star atlas', color: ["#1a1a1a"]},
        {name: 'Thetan', color: ["#ff751a"]},
        {name: 'Defina', color: ["#ffff99"]},
        {name: 'Embersword', color: ["#ff3333"]},
        {name: 'TRV', color: ["#e60000"]},
        // Salary
        {name: 'Daria', color: ["#e60000"]},
        // Travel
        {name: 'Hotel', color: ["#ff9900"]},
        {name: 'Flight', color: ["#ffff99"]},
        {name: 'Tour', color: ["#999900"]},
        {name: 'Transport', color: ["#333300"]},
        {name: 'Supermarket (Travel)', color: ["#bfff80"]},
        {name: 'Extra', color: ["#1a1300"]},
        // Tour
        {name: 'Basic tour', color: ["#80ffff"]},
        {name: 'Small trip', color: ["#00cccc"]},
        // Health
        {name: 'Estetic', color: ["#f2d9e6"]},
        {name: 'Pharmacy', color: ["#cc6699"]},
        {name: 'Doctor', color: ["#862d59"]},
        // Utility
        {name: 'Office materials', color: ["#b366ff"]},
        {name: 'Printing', color: ["#6600cc"]},
        // Clothes
        {name: 'Accessory D', color: ["#ffe6ff"]},
        {name: 'Clothes D', color: ["#ff99ff"]},
        {name: 'Accessory P', color: ["#e600e6"]},
        {name: 'Clothes P', color: ["#99ffcc"]},
        {name: 'Shoes P', color: ["#33ff99"]},
        {name: 'Total', color: ["#ff9933"]},
    ]
}

const allocationCategory = {
    predefined: true,
    stacked: true,
    format: " {valueY.formatNumber('#.0a')}",
    lineSeries: [],
    colSeries: [
        {name: 'Fixed income', color: ["#bf80ff"]},
        {name: 'US growth', color: ["#3366ff"]},
        {name: 'US finances', color: ["#66ff99"]},
        {name: 'US super growth', color: ["#80dfff"]},
        {name: 'BR growth', color: ["#ffff66"]},
        {name: 'Stablecoin', color: ["#b34700"]},
        {name: 'Crypto', color: ["#ff3333"]},
        {name: 'Real state', color: ["#b3b3b3"]},
        {name: 'Cash', color: ["#33cc33"]},
        {name: 'Total', color: ["#ff9933"]},
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
        {name: 'Nu', color: ["#bf80ff"]},
        {name: 'BRL', color: ["#33cc33"]},
        {name: 'IVVB11', color: ["#3366ff"]},
        {name: 'MSFT34', color: ["#24478f"]},
        {name: 'GOGL34', color: ["#4775d1"]},
        {name: 'FBOK34', color: ["#8080ff"]},
        {name: 'AMZO34', color: ["#99b3e6"]},
        {name: 'DISB34', color: ["#eaf0fa"]},
        {name: 'TSLA34', color: ["#80dfff"]},
        {name: 'JPMC34', color: ["#66ff99"]},
        {name: 'BRAX11', color: ["#ffff66"]},
        {name: 'BBSD11', color: ["#cc9900"]},
        {name: 'BTC', color: ["#4d0000"]},
        {name: 'ETH', color: ["#990000"]},
        {name: 'ADA', color: ["#e60000"]},
        {name: 'AVAX', color: ["#ff3333"]},
        {name: 'SOL', color: ["#ff8080"]},
        {name: 'AXS', color: ["#ffcccc"]},
        {name: 'BNB', color: ["#ffe6e6"]},
        {name: 'USDT', color: ["#b34700"]},
        {name: 'IRDM11', color: ["#b3b3b3"]},
        {name: 'Total', color: ["#ff9933"]},
    ]
}

const dictionaries = {
    pt: pt,
    en: en
}


const incomeCategories = ['Parents', 'Stocks', 'Fixed income', 'Crypto', 'Stablecoin', 'Salary', 'Cash', 'Taxes', 'NFT games'];
const expensesCategories = ['Taxes', 'Loan', 'Food', 'Clothes', 'Bureaucracy', 'Services', 'Gift', 'Electronics', 'NFT games', 'Salary', 'Transport', 'Home', 'Travel', 'Tour', 'Health', 'Utility'];

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