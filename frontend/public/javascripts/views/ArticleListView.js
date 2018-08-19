class ArticleListView {

  format(articleList){
    var listHTML = `<ul>`
    articleList.forEach(function(article) {
      var HTML = `<li>${
        article.title
      }</li><li>${
        article.subheading
      }</li><li>${
        article.excerpt
      }</li>`
      listHTML += HTML
    })
    listHTML += `</ul>`
    return listHTML
  };
}

module.exports = ArticleListView;
