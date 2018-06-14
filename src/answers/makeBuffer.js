function makeBuffer(){
    let storage = '';

    function initial(){
        if( arguments[0] === undefined ){
            return storage;
        }else{
            storage += String(arguments[0]);
        }
    }

    initial.clear = function(){
        storage = 'empty!'
    }

    return initial
}

let some = makeBuffer()
console.log( some('ini') )
console.log( some( 123) )
console.log( some() )
some.clear()
console.log( some() )