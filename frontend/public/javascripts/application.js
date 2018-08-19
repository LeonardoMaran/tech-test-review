document.addEventListener('DOMContentLoaded', function() {

  let api = 'http://localhost:3010/api';

  fetch(api)
    .then(response => {
      if (response.status !== 200) {
        console.log("We have a problem with api:  " + response.status);
        return;
      }
      response.json()
      .then(data => console.log(data))
    })
    .catch(err => console.log(err))

});
