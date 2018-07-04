async function simpleFunction() {
    let data = await fetchData( 'http://api.openweathermap.org/data/2.5/forecast?id=524901' )
    return data
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




