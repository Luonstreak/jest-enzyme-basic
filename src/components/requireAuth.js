import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    shouldRedirect() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    componentDidMount() {
      this.shouldRedirect();
    }

    componentDidUpdate(nextProps) {
      this.shouldRedirect();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  };

  return connect(
    mapStateToProps,
    null
  )(ComposedComponent);
};
