function isPalindrome( string ) {
    let arr = string.toLowerCase().split(''),
        alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split(''),
        noPunctuationArr = arr.filter( el => alphabetArr.indexOf( el ) > -1 )

        return noPunctuationArr.join('') == noPunctuationArr.reverse().join('')
}