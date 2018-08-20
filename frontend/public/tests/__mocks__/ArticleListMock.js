class ArticleListMock {
  setState() {
    this.createListCalled = 0
  }

  createList(){
    this.createListCalled += 1
  }

  viewList(){}
}

module.exports = ArticleListMock;
