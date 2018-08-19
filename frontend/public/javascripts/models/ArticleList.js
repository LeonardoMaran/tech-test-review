class ArticleList {
  constructor(data) {
    this.state = {
      data: data,
      articles: []
    }
  }

  createList(Article = Article){
    for (var i = 0; i < 5; i++) {
      let article = new Article(this.state.data.results[0].results[i]);
      this.state.articles.push(article.view())
    }
  }

  viewList(){
    return this.state.articles
  }
}

module.exports = ArticleList;
