export class DataService {
  requestData(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        url,
        true
      );
      xhr.onload = function() {
        if (this.status === 200) {
            resolve(xhr.responseText);
        } else {
            var error = new Error(this.statusText);
            error.code = this.status;
            reject(error);
        }
      };
      xhr.onerror = function () {
        reject(new Error('Network Error'));
      };
      xhr.send();
      });
  }
}



