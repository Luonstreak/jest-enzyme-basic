import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeAuth } from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.handleAuth = this.handleAuth.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleAuth(e){
    e.preventDefault()
    this.props.changeAuth();
  } 

  renderButton() {
    return (
      <button type="button" onClick={this.handleAuth}>{this.props.auth ? "LogOut" : "Log In"}</button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return { changeAuth: () => dispatch(changeAuth()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
