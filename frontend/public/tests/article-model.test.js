const Article = require('../javascripts/Article-model');

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

  const article = new Article()

  it('stores state', () => {
    article.setState(data,index)
    expect(article.state).toEqual(
      {
        title: "Test title",
        subheading: "Test subheading",
        excerpt: "Test excerpt",
        index: 0
      }
    )
  })

  it('returns a title', () => {
    expect(article.view().title).toEqual("Test title")
  })

  it('returns a subheading', () => {
    expect(article.view().subheading).toEqual("Test subheading")
  })

  it('returns a excerpt', () => {
    expect(article.view().excerpt).toEqual("Test excerpt")
  })

  it('returns an index', () => {
    expect(article.view().index).toEqual(0)
  })

});
