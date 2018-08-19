const Article = require('../javascripts/article-model');

describe('Article', () => {
  const data = {
    title: {
      title: "Test title"
    },
    editorial: {
      subheading: "Test subheading"
    },
    summary: {
      excerpt: "Test excerpt"
    }
  }
  const index = 0

  const article = new Article(data, index)

  it('stores a title', () => {
    expect(article.view().title).toEqual("Test title")
  })

  it('stores a subheading', () => {
    expect(article.view().subheading).toEqual("Test subheading")
  })

  it('stores a excerpt', () => {
    expect(article.view().excerpt).toEqual("Test excerpt")
  })

  it('stores an index', () => {
    expect(article.view().index).toEqual(0)
  })

});
