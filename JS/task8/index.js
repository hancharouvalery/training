var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url1 = 'http://www.nbrb.by/API/ExRates/Currencies/100';
var url2 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&ParamMode=0';
var url3 = 'http://www.nbrb.by/API/ExRates/Currencies/1';
var url4 = 'http://www.nbrb.by/API/ExRates/Rates/310?ParamMode=0';
var url5 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&ParamMode=0';

xhr.onreadystatechange = function () { 
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
  } else {
    console.log('-----------------------------------------------------------------\n' + xhr.responseText);
  }
  
};

function doAsyncReq(url) {
  xhr.open(
    'GET', 
    url, 
    false
  );
 
  xhr.send();
};

doAsyncReq(url1);
doAsyncReq(url2);
doAsyncReq(url3);
doAsyncReq(url4);
doAsyncReq(url5);



















