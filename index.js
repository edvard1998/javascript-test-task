const WINNING_SUM = 123.40;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = cartItemsPrices.reduce((aggr, currentVal) => {
        return (+aggr + +currentVal).toFixed(2);
     }, 0);

    return sum == WINNING_SUM ? true : false;
}

module.exports = doesCartWinPrize;
