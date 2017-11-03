var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url1 = 'http://www.nbrb.by/API/ExRates/Currencies/100';
var url2 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+28+Oct+2017+21%3A00%3A00+GMT&ParamMode=0';
var url3 = 'http://www.nbrb.by/API/ExRates/Currencies/1';
var url4 = 'http://www.nbrb.by/API/ExRates/Rates/310?ParamMode=0';
var url5 = 'http://www.nbrb.by/API/ExRates/Rates/170?onDate=Sat%2C+30+Sep+2017+21%3A00%3A00+GMT&ParamMode=0';

var xhr = new XMLHttpRequest();
function doReq1(callback) {
  xhr.open('GET', url1, true);
  xhr.onreadystatechange = function () { 
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
      console.log("REQUEST #1\n-----------------------------------------------------------------");
      console.log(xhr.responseText);
      if(callback) {
        callback();
      }
    }
  };
  xhr.send();
};

var xhr2 = new XMLHttpRequest();
function doReq2(callback) {
  xhr2.open('GET', url2, true);
  xhr2.onreadystatechange = function () { 
    if (xhr2.readyState != 4) return;

    if (xhr2.status != 200) {
        console.log(xhr2.status + ': ' + xhr2.statusText);
    } else {
      console.log("REQUEST #2\n-----------------------------------------------------------------");
      console.log(xhr2.responseText);
      if(callback) {
        callback();
      }
    }
    
  };
  xhr2.send();
};

var xhr3 = new XMLHttpRequest();
function doReq3(callback) {
  xhr3.open('GET', url3, true);
  xhr3.onreadystatechange = function () { 
    if (xhr3.readyState != 4) return;

    if (xhr3.status != 200) {
        console.log(xhr3.status + ': ' + xhr3.statusText);
    } else {
      console.log("REQUEST #3\n-----------------------------------------------------------------");
      console.log(xhr3.responseText);
      if(callback) {
        callback();
      }
    }
    
  };
  xhr3.send();
};

var xhr4 = new XMLHttpRequest();
function doReq4(callback) {
  xhr4.open('GET', url4, true);
  xhr4.onreadystatechange = function () { 
    if (xhr4.readyState != 4) return;

    if (xhr4.status != 200) {
        console.log(xhr4.status + ': ' + xhr4.statusText);
    } else {
      console.log("REQUEST #4\n-----------------------------------------------------------------");
      console.log(xhr4.responseText);
      if(callback) {
        callback();
      }
    }
    
  };
  xhr4.send();
};

var xhr5 = new XMLHttpRequest();
function doReq5(callback) {
  xhr5.open('GET', url5, true);
  xhr5.onreadystatechange = function () { 
    if (xhr5.readyState != 4) return;

    if (xhr5.status != 200) {
        console.log(xhr5.status + ': ' + xhr5.statusText);
    } else {
      console.log("REQUEST #5\n-----------------------------------------------------------------");
      console.log(xhr5.responseText);
      if(callback) {
        callback();
      }
    }
    
  };
  xhr5.send();
};

doReq1(function() {
  doReq2(function() {
    doReq3(function() {
      doReq4(function(){
        doReq5();
      })
    })
  })
});        



























