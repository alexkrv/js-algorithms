function memFibonacci( index, cache = [] ) {
    if( cache[index] !== undefined ) {
        return cache[ index ]
    } else {
        if( index < 3 ) {
            return 1
        } else {
            cache[index] = memFibonacci(index - 1, cache) + memFibonacci(index - 2, cache)
            return cache[index]
        }
    }
}