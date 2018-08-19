class Article {
  setState(data, index) {
    this.state = {
      title: data.title.title,
      subheading: data.editorial.subheading,
      excerpt: data.summary.excerpt,
      index: index
    }
  }

  view(){
    return this.state
  };
}

module.exports = Article;
