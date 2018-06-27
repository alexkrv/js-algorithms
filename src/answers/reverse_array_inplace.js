function reverse_array_inplace( arr ) {
    let tmp,
        arrMaxInd = arr.length-1

    for( var i = 0; i < arr.length/2; i++ ) {
        tmp = arr[arrMaxInd-i]
        arr[arrMaxInd-i] = arr[i]
        arr[i] = tmp
    }
    return arr
}