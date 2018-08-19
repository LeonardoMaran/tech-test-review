const ArticleList = require('../javascripts/models/ArticleList');

class ArticleMock {
  constructor(){}

  view(){
    return "view was called"
  }

}

describe('ArticleList', () => {
  const data = {
    results: [
      {
        results: [1,2,3,4,5]
      }
    ]
  }

  it('creates a new article list', () => {
    articleList = new ArticleList(data)
    articleList.createList(ArticleMock)
    expect(articleList.state.articles).toEqual([
      'view was called',
      'view was called',
      'view was called',
      'view was called',
      'view was called'
    ])
  })

  it('returns a new article list', () => {
    articleList = new ArticleList(data)
    articleList.state.articles = ['new list']
    expect(articleList.viewList()).toEqual(['new list'])
  })


});
