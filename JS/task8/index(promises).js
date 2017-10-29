var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var urlArray = ['http://www.nbrb.by/API/ExRates/Currencies/100',
'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&ParamMode=0', 
'http://www.nbrb.by/API/ExRates/Currencies/1',
'http://www.nbrb.by/API/ExRates/Rates/310?ParamMode=0',
'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&ParamMode=0'];

function doPromise() {
    var promise = new Promise(function (resolve, reject) {
    xhr.onreadystatechange = function () { 
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            reject((xhr.status + ': ' + xhr.statusText));
        } else {
            resolve('-----------------------------------------------------------------\n' + xhr.responseText);
        }

    }
    });

    promise
    .then(
      result => {
        console.log(result); // result - аргумент resolve
      },
      error => {
        console.log(error); // error - аргумент reject
      }
    );

    return promise;
};

for(var i=0; i< urlArray.length; i++) {
    
    doPromise();

    xhr.open(
      'GET', 
      urlArray[i], 
      false
    );
  
    xhr.send();
  }



