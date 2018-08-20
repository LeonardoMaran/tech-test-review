class ArticleList {
  setState(data) {
    this.state = {
      data: data,
      articles: []
    }
  }

  createList(article = new Article){
    for (var i = 0; i < 6; i++) {
      article.setState(this.state.data.results[0].results[i], i)
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
