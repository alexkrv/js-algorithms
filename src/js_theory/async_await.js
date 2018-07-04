async function simpleFunction() {
    let data = await fetchData( 'http://localhost:3012/api/get_number' )
    return data
}

function fetchData( url ){
    return new Promise( (resolve, reject ) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, false)
        // xhr.setRequestHeader('Access-Control-Allow-Origin','*')

        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();

    })
}




