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

  let articles = 'http://localhost:3010/articles';

  fetch(articles)
  .then(response => {
    if (response.status !== 200) {
      console.log("We have a problem with articles: " + response.status);
      return;
    }
    response.json()
    .then(data => {
      console.log(data);
      let articleListController = new ArticleListController(data);
      articleListController.render();
    });
  })
  .catch(err => console.log(err))

  let tryapost = 'http://localhost:3010/tryapost';

  let data = {"search": "Banks"}

  fetch(tryapost, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.status !== 200) {
      console.log("We have a problem with articles: " + response.status);
      return;
    }
    response.json()
    .then(data => {console.log(data);});
  })
  .catch(err => console.log(err))

});
