function binarySearch( string, target ) {

    if( string.length === 1 || !string.includes( target )){
        return string
    }

    if( string.substring(0, string.length/2 ).includes( target ) ) {
        return binarySearch( string.slice(0, string.length/2), target )
    } else {
        return binarySearch( string.slice( string.length/2 ), target )
    }
}
