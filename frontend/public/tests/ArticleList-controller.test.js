const ArticleListController = require('../javascripts/controllers/ArticleListController');

// clearly all these mocks need to be refactored into the mock file.

class ArticleListMock {
  setState() {
    this.createListCalled = 0
  }

  createList(){
    this.createListCalled += 1
  }

  viewList(){}
}

class ArticleListViewMock {
  constructor() {
    this.formatCalled = 0
  }

  format(){
    this.formatCalled += 1
  }
}

class ElementMock {
  innerHTML(){}
}

class DocumentMock {
  getElementById(){
    return new ElementMock
  }

}

const document = new DocumentMock

const data = {}

describe('ArticleListController', () => {

  let articleListController = new ArticleListController(data, new ArticleListMock, new ArticleListViewMock)

//I want to have some sort of beforeEach here
  articleListController.render(document);

  it('creates a new list', () => {
    expect(articleListController.state.articleList.createListCalled).toEqual(1)
  })

  it('formats the list', () => {
    expect(articleListController.state.articleListView.formatCalled).toEqual(1)
  })

});
