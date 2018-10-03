function sieveOfEratosthenes ( num ) {
    var primes = []
    var result = []
    for ( let i = 0; i < num; i++ ) {
        primes[i] = true;
    }

    primes[0] = false;
    primes[1] = false;

    for ( let i = 2; i < Math.sqrt( num); i++ ) {
        for( let j = 2; j * i <= num; j++ ) {
            primes[j*i] = false;
        }
    }

    for( let i = 0; i < primes.length; i ++ ) {
        if( primes[i] )
            result.push( i )
    }

    return result
}


// function sieveOfEratosthenes ( num ) {
//     let counter = 0;
//     let result = [];
//
//     while( counter <= num ) {
//         if( isPrime( counter ) ) {
//             result.push( counter )
//         }
//         counter++;
//     }
//     return result;
// }
//
// function isPrime( num ) {
//     if ( num <= 2 ) return false
//     for( let i = 2; i < num; i++ ) {
//         if( num%i === 0 ) {
//             return false
//         }
//     }
//     return true
// }