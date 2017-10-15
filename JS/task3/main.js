'use strict';

function argMemory() {
    var arr = [];
    
    return function() {

        if(arguments.length === 0) {
            return console.log(arr);
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
f();
f({a:1}, 'Some string');
f();
f();




