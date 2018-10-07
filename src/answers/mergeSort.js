function mergeSort( arr ) {
    let midIndex = Math.floor( arr.length / 2 )
    if( arr.length === 1 ) {
        return arr
    } else {
        return merge( mergeSort( arr.slice(0, midIndex ) ), mergeSort( arr.slice( midIndex ) ) )
    }
}

function merge( arr1, arr2 ) {
    let result = [];
    let minElem = 0;

    while( arr1.length !== 0 && arr2.length !== 0 ) {
        if ( arr1[0] <= arr2[0] ) {
            minElem = arr1.shift()
        }else {
            minElem = arr2.shift()
        }
        result.push( minElem )
    }

    if( arr1.length !== 0 ) {
        result = result.concat( arr1 )
    } else {
        result = result.concat( arr2 )
    }

    return result;
}

