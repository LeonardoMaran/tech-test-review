class ArticleList {
  constructor(data) {
    this.state = {
      data: data,
      articles: []
    }
  }

  // createList(Article = Article){

  createList(){
    for (var i = 0; i < 6; i++) {
      const article = new Article(this.state.data.results[0].results[i], i);
      this.state.articles.push(article.view())
    }
  }

  viewList(){
    return this.state.articles
  }
}

if (typeof module !== 'undefined') {
  module.exports = ArticleList;
};
