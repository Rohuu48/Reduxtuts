import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <div>Select a user...</div>;
    }
    return (
      <div>
        <h2>
          {this.props.user.first} {this.props.user.last}
        </h2>
        <h3>Age: {this.props.user.age}</h3>
        <h3>Description: {this.props.user.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.activeUser,
  };
}

export default connect(mapStateToProps)(UserDetail);
