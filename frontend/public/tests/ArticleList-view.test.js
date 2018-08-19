const ArticleListView = require('../javascripts/views/ArticleListView');

describe('ArticleListView', () => {

  const articleList = [
    {title: 'test one title',
    subheading: 'test one subheading',
    excerpt: 'test one excerpt'},
    {title: 'test two title',
    subheading: 'test two subheading',
    excerpt: 'test two excerpt'},
    {title: 'test three title',
    subheading: 'test three subheading',
    excerpt: 'test three excerpt'}
  ]

  it('Turns a list into an HTML format', () => {
    const articleListView = new ArticleListView
    expect(articleListView.format(articleList)).toEqual('<ul><li>test one title</li><li>test one subheading</li><li>test one excerpt</li><li>test two title</li><li>test two subheading</li><li>test two excerpt</li><li>test three title</li><li>test three subheading</li><li>test three excerpt</li></ul>')
  })

});
