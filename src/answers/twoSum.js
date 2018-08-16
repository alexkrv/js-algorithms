function twoSum( numArr, sum ) {
    let hash = makeHash( numArr )
    let result = [];

    for( let p in hash ) {
        if( hash.hasOwnProperty(sum - Number(p) ) ){
            result.push([Number(p),sum-Number(p) ]);
            hash.p--;
            hash[sum-p]--;
        }
    }

    return result
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