document.addEventListener('DOMContentLoaded', function() {

  const articles = 'http://localhost:3010/articles';

  fetch(articles)
  .then(response => {
    if (response.status !== 200) {
      console.log("We have a problem with articles: " + response.status);
      return;
    }
    response.json()
    .then(data => {
      const articleListController = new ArticleListController(data);
      articleListController.render(document);
    });
  })
  .catch(err => console.log(err))

});

document.addEventListener("submit", function(event) {
  event.preventDefault();
  submit();
});

function submit() {
  const search = document.getElementById('o-forms-standard')

  const searchrequest = 'http://localhost:3010/searchrequest';

  const data = {search: {} }

  data.search = document.getElementById('search').value

  fetch(searchrequest, {
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
    .then(data => {
      const articleListController = new ArticleListController(data);
      articleListController.render(document);
    });
  })
  .catch(err => console.log(err))
}
