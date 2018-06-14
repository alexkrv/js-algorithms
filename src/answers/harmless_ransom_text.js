function harmless_ransom_text( quote, text ){
    let textArr = text.split(' '),
        quoteArr = quote.split(' ')

    console.log( textArr.sort() )
    console.log( quoteArr.sort() )

    return reccurcion( textArr, quoteArr, undefined )
}

function reccurcion( arr1, arr2, last ) {
    if( arr1.length == 0 || arr2.length == 0 )
        return true

    if( arr1[0] == arr2[0] ) {
        last = arr1[0]
        arr1.shift()
        arr2.shift()
        console.log('==', arr1, arr2, last)
        return reccurcion(arr1, arr2, last)
    }
    else if( arr2[0] == last ){
        while( arr2[0] == last ){
            arr2.shift()
        }
        console.log('after while', arr1, arr2, last)
        if( arr1[0] == arr2[0] ) {
            last = arr1[0]
            arr1.shift()
            arr2.shift()
            return reccurcion(arr1, arr2, last)
        }else {
            console.log('else return false')
            return false
        }
    }else{
        console.log('else return false')
        return false
    }
}

// console.log( harmless_ransom_text('some text about anything in the world', 'some2 text about anything in the world') )