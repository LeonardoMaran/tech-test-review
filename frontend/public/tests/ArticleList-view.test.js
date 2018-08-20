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
    expect(articleListView.format(articleList)).toEqual("<div class=\"o-grid-row\"><div data-o-grid-colspan=undefined><h4>test one title</h4><h6>test one subheading</h6><p>test one excerpt</p></div><div data-o-grid-colspan=undefined><h4>test two title</h4><h6>test two subheading</h6><p>test two excerpt</p></div><div data-o-grid-colspan=undefined><h4>test three title</h4><h6>test three subheading</h6><p>test three excerpt</p></div></div>")
  })

});
