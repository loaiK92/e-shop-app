import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="description">
        <h2>{this.props.title}</h2>
        <p>{this.props.price} &#8364;</p>
      </div>
    );
  }
}

export default Description;
