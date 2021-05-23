export function nFormatter(num, digits) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export function generateSeries(data) {
    let series = Array.from(data.reduce((prev, curr) => {
        Object.keys(curr).map(key => {
            if(key !== "date")
                prev.add(key);
            return key;
        })
        return prev;
    }, new Set()));
    return series;
}

export function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}