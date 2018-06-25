function reverse_words( str ) {
    let words = str.split(' ')

    return words.map( el => {
        var newWord = ''
        for( var i = el.length - 1; i >= 0 ; i-- ) {
            newWord += el[i]
        }
        return newWord
    } )
}