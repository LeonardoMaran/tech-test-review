class ArticleListController {
  constructor(data, articleList = new ArticleList, articleListView = new ArticleListView) {
    this.state = {
      data: data,
      articleList: articleList,
      articleListView: articleListView
    }
  }

  render(document){
    this.state.articleList.setState(this.state.data)
    this.state.articleList.createList();
    let listHTML = this.state.articleListView.format(this.state.articleList.viewList())
    let title = document.getElementById('title');
    title.innerHTML = listHTML
  }

}

if (typeof module !== 'undefined') {
  module.exports = ArticleListController;
};
