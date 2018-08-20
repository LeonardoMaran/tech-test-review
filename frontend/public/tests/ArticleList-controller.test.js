const ArticleListController = require('../javascripts/controllers/ArticleListController');
const ArticleListMock = require('./__mocks__/ArticleListMock')
const ArticleListViewMock = require('./__mocks__/ArticleListViewMock')
const DocumentMock = require('./__mocks__/DocumentMock')
const document = new DocumentMock
const data = {}

describe('ArticleListController', () => {

  let articleListController = new ArticleListController(data, new ArticleListMock, new ArticleListViewMock)

  articleListController.render(document);

  it('creates a new list', () => {
    expect(articleListController.state.articleList.createListCalled).toEqual(1)
  })

  it('formats the list', () => {
    expect(articleListController.state.articleListView.formatCalled).toEqual(1)
  })

});
