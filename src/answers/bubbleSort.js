function bubbleSort( arr ) {
    let tmp = 0;
    for( let j = 0; j < arr.length-1; j++ ) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                tmp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = tmp;
            }
        }
    }

    return arr;
}