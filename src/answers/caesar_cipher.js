function caesar_cypher( str, num ) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        alphabetLngth = alphabet.length,
        input = str.split('')

    return input.map( el => {
        var isLetter = alphabet.indexOf( el ) >= 0,
            ind = -1,
            letterPosition = -1
        if( isLetter ) {
            ind = alphabet.indexOf( el ) + num
            letterPosition = ind >= 0 ? ind : alphabetLngth + ind

            return alphabet[ letterPosition%alphabetLngth ]
        } else {
            return el
        }

    } )
}