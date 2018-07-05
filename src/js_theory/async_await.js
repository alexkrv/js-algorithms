async function simpleFunction() {
    let x1 = Number( await fetchData( 'http://localhost:3012/api/get_number' ) )
    let x2 = Number( await fetchData( 'http://localhost:3012/api/get_number' ) )
    console.log(`First = ${x1}\n\rSecond = ${x2}`)
    return x1 + x2
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




