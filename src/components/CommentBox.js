import React from "react";
import { connect } from "react-redux";
import { addComment, fetchComments } from "actions";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.input);
    this.setState({ input: "" });
  }

  handleRequest(e) {
    e.preventDefault();
    this.props.fetchComments();
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.input} onChange={this.handleChange} />
        <div>
          <button type="submit">Send</button>
          <button type="button" className="api" onClick={this.handleRequest}>Call API</button>
        </div>
      </form>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: comment => dispatch(addComment(comment)),
    fetchComments: comment => dispatch(fetchComments(comment)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);