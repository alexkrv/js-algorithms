function sieveOfEratosthenes ( num ) {
    let counter = 0;
    let result = [];

    while( counter <= num ) {
        if( isPrime( counter ) ) {
            result.push( counter )
        }
        counter++;
    }
    return result;
}

function isPrime( num ) {
    if ( num <= 2 ) return false
    for( let i = 2; i < num; i++ ) {
        if( num%i === 0 ) {
            return false
        }
    }
    return true
}