function filter( arr, func ){
    return arr.filter( e => func(e) )
}

function inBetween( a, b) {
    return ( t ) => a <= t && t <= b
}

function inArray( arr ){
    return ( t ) => arr.includes( t )
}