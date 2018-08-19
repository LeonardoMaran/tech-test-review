class ArticleListController {
  constructor(data, ArticleList = ArticleList, ArticleListView = ArticleListView) {
    this.state = {
      articleList: new ArticleList(data),
      articleListView: new ArticleListView
    }
  }

  render(){
    this.state.articleList.createList();
    let listHTML = this.state.articleListView.format(this.state.articleList.viewList())
    let title = document.getElementById('title');
    title.innerHTML = listHTML
  }
}

module.exports = ArticleListController;
