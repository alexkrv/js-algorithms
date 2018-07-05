async function simpleFunction() {
    let x1 = Number( await fetchData( 'http://localhost:3012/api/get_number' ) )
    let x2 = Number( await fetchData( 'http://localhost:3012/api/get_number' ) )
    console.log(`First = ${x1}\n\rSecond = ${x2}`)


    //just for 'console.***' testing
    console.trace()
    console.log( console.memory )
    for( let i = 0; i < 10; i++ ) {
        console.count('This is count #')
        console.assert( i < 5, "I is less than 5!")
    }
    console.log( "Memory %o. This is the %s-nd time of using console.memory object", console.memory, 2 )
    console.table([{name:'first', age:'23'},{name:'second', age:'33'},{name:'third', age:'55'}])
    //end of -- just for 'console.***' testing

    return x1 + x2
}

async function simpleErrorFunction() {

    try{
        let answer = await fetchError();
    }catch( error ){
        console.error( "This is error", error )
    }
}

function fetchError(){
    return new Promise( ( resolve, reject ) => {
        window.setTimeout( () => reject( {'error': '404'} ), 1000)
    } )
}

function fetchData( url ){
    return new Promise( (resolve, reject ) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, false)
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    })
}




