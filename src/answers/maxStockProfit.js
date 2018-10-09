function maxStockProfit( arr ) {
    let buyPrice = 0;
    let sellPrice = 0;
    let maxProfit = -1;
    let changeByPrice = true;

    for( let i = 0; i < arr.length; i++ ) {
        if( changeByPrice ) {
            buyPrice = arr[i]
        }
        sellPrice = arr[i+1]

        if( sellPrice < buyPrice ) {
            changeByPrice = true
        } else {
            let tmp = sellPrice - buyPrice
            if( tmp > maxProfit ) {
                maxProfit = tmp
            }
            changeByPrice = false;
        }
    }

    return maxProfit;
}