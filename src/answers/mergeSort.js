function mergeSort( arr ) {

    if( arr.length === 1 ) {
        return arr
    } else {
        // console.log('TEST',arr.slice(0, arr.length / 2 ),arr.slice(arr.length / 2 ))
        return merge( mergeSort(arr.slice(0, arr.length / 2 )), mergeSort(arr.slice(arr.length / 2 )) )
    }
}

function merge( arr1, arr2 ) {
    let result = [];
    // let first = []
    // let second = []

    //[2,4,11]
    //[1,3]

    // if( arr1.length > arr2.length ) {
    //     first = [].concat( arr1 )
    //     second = [].concat( arr2 )
    // } else {
    //     first = [].concat( arr2 )
    //     second = [].concat( arr1 )
    // }

    while( !( arr1.length === 0 && arr2.length === 0 ) ) {

        if( arr1.length === 0 && arr2.length !== 0 ){
            result = result.concat(arr2);
            arr2.length = 0;
            break;
        }

        if( arr2.length === 0 && arr1.length !== 0 ){
            result = result.concat(arr1);
            arr1.length = 0;
            break;
        }

        if (arr1[0] <= arr2[0]) {
            result.push( arr1[0] );
            arr1.shift()
        }else {
            result.push( arr2[0] );
            arr2.shift()
        }
    }

    //
    //
    // console.log('arr1, arr2',first, second )
    // let currentFirst = 0;
    // let currentSecond = 0;
    //
    // for( let i = currentSecond; i < first.length; i++ ) {
    //     for( let j = currentFirst; j < second.length; j++ ) {
    //         if (second[j] <= first[i]) {
    //             result.push(second[j]);
    //             currentFirst = j;
    //             console.log('RESULT 1', result)
    //         }else {
    //             result.push(first[i]);
    //             currentSecond = i;
    //             console.log('RESULT 2', result)
    //             break;
    //         }
    //     }
    //     if( currentFirst !== first.length - 1 && currentSecond === second.length-1 ) {
    //         result = result.concat( first.slice(currentFirst) )
    //         break;
    //     }
    // }


    console.log( 'result', result )
    return result;
}

