function byField( name ) {
    return function( a,b ){
        return a[name] > b[name] ? 1 : -1
    }
}