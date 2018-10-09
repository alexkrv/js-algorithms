function maxStockProfit( arr ) {
    let min = 1;
    let max = 1;

    for( let i = 0; i < arr.length; i++ ) {
        if( min > arr[i] )
            min = arr[i];
        if( max < arr[i] )
            max = arr[i];
    }

    return max - min > 0 ? max - min : -1
}