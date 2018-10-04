function bubbleSort( arr ) {
    let tmp = 0;
    for( let i = arr.length; i > 0; i-- ) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}