import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="card-main">
        <img src={this.props.image} alt={this.props.title} />
      </div>
    );
  }
}

export default Main;
