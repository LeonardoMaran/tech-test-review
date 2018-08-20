// constructor(data, ArticleList = ArticleList, ArticleListView = ArticleListView)

class ArticleListController {
  constructor(data) {
    this.state = {
      articleList: new ArticleList(data),
      articleListView: new ArticleListView
    }
  }

  // render(document = document){

  render(){
    this.state.articleList.createList();
    let listHTML = this.state.articleListView.format(this.state.articleList.viewList())
    let title = document.getElementById('title');
    title.innerHTML = listHTML
  }

  inputHTML(){}
}

if (typeof module !== 'undefined') {
  module.exports = ArticleListController;
};
