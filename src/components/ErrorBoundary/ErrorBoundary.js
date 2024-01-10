import React from "react";
import "./ErrorBoundary.scss";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: error, errorInfo: errorInfo});
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className="error-container">
          <h2>An Error Has Occurred. Please Try Again.</h2>
          <div className="error-message">{this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
