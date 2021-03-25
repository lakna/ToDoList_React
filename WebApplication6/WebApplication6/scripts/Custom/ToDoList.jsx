function ToDos(props) {
  const content = props.posts.map((post) => (
    <div key={post.Id}>
      <table>
        <tbody>
          <tr>
            <td>{post.Content}</td>
            <td>{post.IsDone.toString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
  return <div>{content}</div>;
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", this.props.url, true);
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText);
      this.setState({ data: data });
    };
    xhr.send();
  }
  render() {
    return <ToDos posts={this.state.data} />;
  }
}

ReactDOM.render(<ToDoList url="/todos" />, document.getElementById("content"));
