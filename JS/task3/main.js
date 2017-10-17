'use strict';

function argMemory() {
    var arr = [];
    
    return function() {

        if(arguments.length === 0) {
            return arr;
        }

        for (var i=0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }

    }
}

var f = argMemory();

f(1,2);
f("hello");
f(false);
f(true);
console.log(f());
f({a:1}, 'Some string');
console.log(f());
console.log(f());




