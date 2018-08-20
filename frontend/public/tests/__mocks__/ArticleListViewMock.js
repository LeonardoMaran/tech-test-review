class ArticleListViewMock {
  constructor() {
    this.formatCalled = 0
  }

  format(){
    this.formatCalled += 1
  }
}

module.exports = ArticleListViewMock;
