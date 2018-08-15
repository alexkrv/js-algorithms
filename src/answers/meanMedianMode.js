function getMode( array ) {
    return Array.isArray( array ) ? Math.sqrt(
            array.map( el => Math.pow( el, 2) )
                .reduce( (acc, num) => acc + num )
            ) : null
}

function getMedian( array ) {
    if( Array.isArray( array ) ) {
        let length = array.length
        let isEven = length % 2 === 0;

        array.sort((a, b) => a - b);

        if (isEven) {
            return (array[length / 2] + array[length / 2 + 1]) / 2
        } else {
            return array[Math.floor(length / 2) + 1]
        }
    } else {
        return null
    }
}

function getMean( array ) {
    return Array.isArray( array ) ? array.reduce( ( acc, num) => acc + num )/array.length : null
}

function getMeanMedianMode( array ) {
    return {
        mean: getMean( array ),
        median: getMedian( array ),
        mode: getMode( array )
    }
}