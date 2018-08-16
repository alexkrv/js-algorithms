function twoSum( numArr, sum ) {
    let hash = makeHash( numArr )
    let arr = [];
    let result = [];

    for( let p in hash ) {
        if( hash.hasOwnProperty(sum - p ) ){
            result.push([p,sum-p ]);
            hash.p--;
            hash[sum-p]--;
        }
    }

    return result
    // for( let i = 0; i < arr.length; i++ ) {
    //     if( hash.hasOwnProperty( sum - arr[i] ) ) {
    //         result.push( [arr[0], arr[1]] )
    //     }
    // }

    // if( arr.length === 2 && ( arr[0] + arr[1] ) === sum ) {
    //     result.push( [arr[0], arr[1]] )
    //     arr = []
    // }
}

function makeHash( arr ) {
    let hash = {}

    for( let i = 0; i < arr.length; i++ ) {
        if( !hash.hasOwnProperty( arr[i] ) ) {
            hash[arr[i]] = 0;
        }
        hash[arr[i]]++;
    }
    return hash
}