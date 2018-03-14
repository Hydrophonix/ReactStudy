const Note = React.createClass({
  handleDelete() {
    this.props.onDelete(this.props.id)
  },

  render() {
    const { text, color } = this.props;
    return (
      <div className="note" style={{ backgroundColor: color}}>
        <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
        {text}
      </div>
    )
  }
});

const NotesEditor = React.createClass({
  getInitialState() {
    return {
      text: '',
      color: 'yellow'
    }
  },

  handleNoteAdd() {
    const newNote = {
      text: this.state.text,
      id: Date.now(),
      color: this.state.color
    };

    this.props.onNoteAdd(newNote);
    this.resetState();
  },

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  },

  handleColor(e) {
    if (e.target.dataset.color) {
      this.setState({ color: e.target.dataset.color});
      Array.from(this.colorsBox.children).forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
    }
  },

  resetState() {
    this.setState({
      text: ''
    })
  },

  render() {
    const COLORS = ['#FF8A80', '#EA80FC', '#2196F3', '#B388FF', '#82B1FF', '#18FFFF', '#1DE9B6', '#76FF03', '#FFD740', '#90A4AE']
    return (
      <div className="editor">
        <textarea
          rows={5}
          placeholder="Enter your text here"
          className="editor__textarea"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
      <div className="editor__control-box">
        <div className="editor__colors-box" onClick={this.handleColor} ref={c => this.colorsBox = c}>
          {
            COLORS.map((item, i) =>
              <div
                key={i}
                data-color={item}
                className="color-box"
                style={{ backgroundColor: item}}
              />
            )
          }
          </div>
          <button onClick={this.handleNoteAdd} className="editor__button">Add note</button>
        </div>
      </div>
    )
  }
});

const NotesGrid = React.createClass({
  componentDidMount() {
    this.msnry = new Masonry(this.grid, {
      columnWidth: 240,
      gutter: 10,
      isFitWidth: true
    })
  },

  componentDidUpdate(prevProps) {
    if (prevProps.notes !== this.props.notes) {
      this.msnry.reloadItems();
      this.msnry.layout();
    }
  },

  render() {
    const { notes, onNoteDelete } = this.props;
    return (
      <div ref={c => this.grid = c} className="grid">
        {
          notes.map(note =>
            <Note
              key={note.id}
              id={note.id}
              color={note.color}
              text={note.text}
              onDelete={onNoteDelete}
            />
          )
        }
      </div>
    )
  }
});

const NotesApp = React.createClass({
  getInitialState() {
    return {
      notes: []
    }
  },

  componentDidMount() {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));

    savedNotes && this.setState({ notes: savedNotes});
  },

  componentDidUpdate(prevProps, prevState) {
    (prevState.notes !== this.state.notes) && this.saveToLocalStorage()
  },

  handleNoteAdd(newNote) {
    this.setState({
      notes: [newNote, ...this.state.notes]
    })
  },

  handleNoteDelete(noteId) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    })
  },

  saveToLocalStorage() {
    const notes = JSON.stringify(this.state.notes);

    localStorage.setItem('notes', notes);
  },

  render() {
    return (
      <div className="app">
        <h1 className="app__header">Notes App</h1>
        <NotesEditor onNoteAdd={this.handleNoteAdd} />
        <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
      </div>
    )
  }
});

ReactDOM.render(
  <NotesApp />,
  document.getElementById('root')
);
