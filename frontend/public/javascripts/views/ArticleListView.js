class ArticleListView {
  constructor(){
    this.state = {
      0: "two-thirds",
      1: "one-third",
      2: "one-quarter",
      3: "one-quarter",
      4: "one-quarter",
      5: "one-quarter"
    }
  }

  format(articleList){
    var self = this
    var listHTML = `<div class="o-grid-row">`
    articleList.forEach(function(article) {
      var HTML = `<div data-o-grid-colspan=${
        self.state[article.index]
      }><h4>${
        article.title
      }</h4><h6>${
        article.subheading
      }</h6><p>${
        article.excerpt
      }</p></div>`
      listHTML += HTML
    })
    listHTML += `</div>`
    return listHTML
  };
}

if (typeof module !== 'undefined') {
  module.exports = ArticleListView;
};
