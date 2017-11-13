class requestDataMovies {
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
      xhr.send();
      });
  }
}

export default requestDataMovies;

