var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url1 = 'http://www.nbrb.by/API/ExRates/Currencies/100';
var url2 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&ParamMode=0';
var url3 = 'http://www.nbrb.by/API/ExRates/Currencies/1';
var url4 = 'http://www.nbrb.by/API/ExRates/Rates/310?ParamMode=0';
var url5 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&ParamMode=0';

function doPromise(url) {
    return new Promise(function (resolve, reject) {
      
      xhr.open(
        'GET', 
        url, 
        true
      );

      xhr.onreadystatechange = function () { 
          if (xhr.readyState != 4) return;

          if (xhr.status != 200) {
              reject((xhr.status + ': ' + xhr.statusText));
          } else {
              resolve(xhr.responseText);
          }

      }

      xhr.send();
    });
};


    
doPromise(url1).then(
    result => {
      console.log(result); // 1
      return doPromise(url2);
    },
    error => {
      console.log(error);
    } 
  ).then(
    result => {
      console.log(result); // 2
      return doPromise(url3);
    },
    error => {
      console.log(error); 
    }
  ).then(
    result => {
      console.log(result); // 3
      return doPromise(url4);
    },
    error => {
      console.log(error); 
    }
  ).then(
    result => {
      console.log(result); // 4
      return doPromise(url5);
    },
    error => {
      console.log(error); 
    }
  ).then(
    result => {
      console.log(result); // 5
    },
    error => {
      console.log(error); 
    }
  );
     
        
    



