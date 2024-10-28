const AmountFormatterGroup = (amount) =>{
    return Number(amount).toLocaleString({
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

export {
    AmountFormatterGroup
}