function isPalindrome( text ) {
    let arr = text.split('')

    if( arr.length % 2 === 0 ) {
      return arr.slice(0, arr.length/2 ).join('') == arr.slice(arr.length/2 ).reverse().join('')
    } else {

    }
}