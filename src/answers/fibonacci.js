function fibonacci( position ) {
    let first = 1;
    let second = 1;
    let counter = 2;
    return recursion( first, second, counter, position )
}

function recursion( first, second, counter, position ) {
    if ( counter === position )
        return second

    counter++
    let result = first + second;
    return recursion ( second, result, counter, position )
}