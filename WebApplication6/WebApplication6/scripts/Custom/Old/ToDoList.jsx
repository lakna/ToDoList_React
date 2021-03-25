class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">Hello, world! I am a CommentBox.</div>
        );
    }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (             
      <form onSubmit={this.handleSubmit}>
      <label>
          To Do:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
}
ReactDOM.render(<NameForm />, document.getElementById('content'));

