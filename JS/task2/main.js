// prime numbers
var arr = [];

var value = 200; //upper value for range primes

for(var i=2; i < value; i++) {
    var dec= [];
    for(var j=2; j < value; j++) {
        if(i%j == 0) {
            dec.push(i);
        } else {
            dec.push(i/j);
        }
    }
    
    var count = 0;
    for (var k=0; k < dec.length; k++) {
        if(dec[k] == i) {
            count++;
        }
    }

    if(count < 2) {
        arr.push(i);
    }
};

console.log(arr);

//fibonacci

var secondArr = [1, 1];

var secondValue = 20; // numbers length

for (var m = 3; m < secondValue; m++) {
    secondArr.push(secondArr[m-2] + secondArr[m-3]);
}

console.log(secondArr);
 

