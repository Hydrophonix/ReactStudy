const Article = React.createClass({
  getInitialState() {
    return {
      isDisplayed: true
    }
  },

  handleArticleDelete() {
    this.props.onDelete(this.props.date)
  },

  handleArticleEdit() {
    this.props.onEdit(this.props.iterator)
  },

  handleDisplayBody() {
    this.setState({ isDisplayed: !this.state.isDisplayed })
  },

  handleTagSearch(e) {
    this.props.onSearch(e.target.textContent)
  },

  render() {
    const { name, text, date, onDelete, tags, onSearch, onEdit } = this.props;
    return (
      <div className="article">
        <div className="article__header">
          <h4>{name}</h4>
          <div className="article__control-panel">
            <span className="article__edit-icon" onClick={this.handleArticleEdit}> ⋿ </span>
            <span className={`${this.state.isDisplayed} article__view-icon`} onClick={this.handleDisplayBody}> ⋁ </span>
            <span className="article__delete-icon" onClick={this.handleArticleDelete}> ⌧ </span>
          </div>
        </div>
        <div className={`${this.state.isDisplayed} article__body`}>
          <p>{text}</p>
          <div className="article__footer">
            <div className="article__footer-tags">
              {
                tags.map((item, i) =>
                  <div key={i} onClick={this.handleTagSearch}>{item}</div>
                )
              }
            </div>
            <span className="article__date">{`${new Date(date)}`}</span>
          </div>
        </div>
      </div>
    )
  }
});

const Editor = React.createClass({
  getInitialState() {
    return {
      name: '',
      text: '',
      tagText: '',
      tags: [],
      field: true
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.editArticle) {
      this.setState(nextProps.editArticle);
    } else {
      this.resetState();
    }
  },


  handleHeadline(e) {
    this.setState({ name: e.target.value })
  },

  handleTags(e) {
    this.setState({ tagText: e.target.value })
  },

  handleTagAdd(e) {
    e.key === 'Enter' &&
    this.setState({
      tagText: '',
      tags: [`#${this.state.tagText}`, ...this.state.tags]
    })
  },

  handleTagDelete(e) {
    this.setState({ tags: this.state.tags.filter(tag => tag !== e.target.className)})
  },

  handleText(e) {
    this.setState({ text: e.target.value })
  },

  handleActiveField(e) {
    e.target.className === 'false' &&
    this.setState({ field: !this.state.field })
  },

  handleArticleAdd() {
    const newArticle = {
      name: this.state.name,
      text: this.state.text,
      tags: this.state.tags,
      id: Date.now()
    };

    this.props.onArticleAdd(newArticle);
    this.resetState();
  },

  resetState() {
    this.setState({ name: '', text: '', tagText: '', tags: [] })
  },

  render() {
    return (
      <div className="editor__wrapper">
        <div className="editor__tabs-box">
          <div className={this.state.field} onClick={this.handleActiveField}>Editor</div>
          <div className={!this.state.field} onClick={this.handleActiveField}>Preview</div>
        </div>
        {
          this.state.field
          ?
          <div className="editor">
            <h3>Make yor article</h3>
            <h4>Headline</h4>
            <input
              type="text"
              onChange={this.handleHeadline}
              value={this.state.name}
              placeholder="Please enter the headline of your article"
            />
            <h4>Tags</h4>
            <input
              type="text"
              onChange={this.handleTags}
              value={this.state.tagText}
              onKeyPress={this.handleTagAdd}
              placeholder="Please enter the tag and press enter"
            />
            <h4>Text</h4>
            <textarea
              rows={5}
              onChange={this.handleText}
              value={this.state.text}
              placeholder="Please enter the text of your article"
            />
            <div className="editor__footer">
              <div className="editor__footer-tags">
                {
                  this.state.tags.map(item =>
                    <div key={item}>
                      {item}
                      <span className={item} onClick={this.handleTagDelete}> ⊗</span>
                    </div>
                  )
                }
              </div>
              <button onClick={this.handleArticleAdd}>Add an article</button>
            </div>
          </div>
          :
          <div className="editor__preview">
            <div className="editor__preview-article">
              <h4>{this.state.name}</h4>
              <p>{this.state.text}</p>
              <div className="editor__preview-tags">
                {
                  this.state.tags.map((item, i) =>
                  <div key={i}>{item}</div>
                  )
                }
              </div>
            </div>
          </div>

        }
    </div>
    )
  }
});

const Feed = React.createClass({
  getInitialState() {
    return {
      searchText: '',
      tagsUsed: {}
    }
  },

  mostUsedTags(articles) {
    const tagsObj = {};
    articles.forEach(article =>
		article.tags.forEach(tag => tagsObj[tag] ? tagsObj[tag] += 1 : tagsObj[tag] = 1));
    return tagsObj;
  },

  handleSearch(e) {
    this.setState({
      searchText: e.target.value
    })
  },

  handleMostUsedTagsSearch(e) {
    this.setState({ searchText: e.target.textContent.split('(')[0]})
  },

  handleTagSearch(text) {
    this.setState({
      searchText: text
    })
  },

  filterText(item) {
    const baseOperations = (str) => str.toLowerCase().includes(this.state.searchText.toLowerCase());
    return baseOperations(item.name)
    || baseOperations(item.text)
    || item.tags.some(tag => baseOperations(tag))
  },

  render() {
    const { articles, onDelete, onEdit } = this.props;
    const usedTags = this.mostUsedTags(articles);

    return (
      <div className="feed">
        <div className="feed__used-tags">
            <h4>Most used tags:</h4>
            {
              Object.keys(usedTags).sort((a, b) => usedTags[b] - usedTags[a]).map(tag =>
                <span key={tag} onClick={this.handleMostUsedTagsSearch}>{tag}({usedTags[tag]})</span>
              )
            }
        </div>
        <input placeholder="Enter text to search" onChange={this.handleSearch} value={this.state.searchText}/>
        {
          articles.filter(this.filterText)
            .map((item, i) =>
              <Article
                key={item.id}
                date={item.id}
                name={item.name}
                text={item.text}
                tags={item.tags}
                onSearch={this.handleTagSearch}
                onDelete={onDelete}
                onEdit={onEdit}
                iterator={i}
              />
            )
        }
      </div>
    )
  }
});

const BoardApp = React.createClass({
  getInitialState() {
    return {
      articles: [],
      editArticle: null,
      editingIndex: 'none'
    }
  },

  componentDidMount() {
    const savedArticles = JSON.parse(localStorage.getItem('articles'));

    savedArticles && this.setState({ articles: savedArticles});
  },

  componentDidUpdate(prevProps, prevState) {
    (prevState.articles !== this.state.articles) && this.saveToLocalStorage()
  },

  saveToLocalStorage() {
    const articles = JSON.stringify(this.state.articles);

    localStorage.setItem('articles', articles);
  },

  handleArticleAdd(newArticle) {
    if (this.state.editingIndex !== 'none') {
      this.setState({
        articles: this.state.articles.map((item, i) =>
          (i === this.state.editingIndex) ? item = newArticle : item = item),
        editArticle: null,
        editingIndex: 'none'
      });
    } else {
      this.setState({
        articles: [newArticle, ...this.state.articles]
      })
    }
  },

  handleArticleEdit(editedArticleIndex) {
    this.setState({
      editArticle: this.state.articles[editedArticleIndex],
      editingIndex: editedArticleIndex
    });
  },

  handleArticleDelete(articleId) {
    this.setState({
      articles: this.state.articles.filter(article => article.id !== articleId)
    })
  },

  render() {
    return (
      <div>
        <h1>The Board</h1>
        <Editor
          onArticleAdd={this.handleArticleAdd}
          editArticle={this.state.editArticle}
        />
        <Feed
          articles={this.state.articles}
          onDelete={this.handleArticleDelete}
          onEdit={this.handleArticleEdit}
        />
      </div>
    )
  }
});

ReactDOM.render(
  <BoardApp />,
  document.getElementById('root')
)
