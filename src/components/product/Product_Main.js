import React, { Component } from "react";

class Main extends Component {
  render() {
    function changeImage(e) {
      const viewer = document.querySelector(".viewer");
      const elements = e.target.parentNode.childNodes;
      elements.forEach(el => el.classList.remove("img-active"));
      e.target.classList.add("img-active");
      viewer.innerHTML = `<img src=${e.target.src} alt=${e.target.alt}/>`;
    }
    return (
      <div className="product-main">
        <div className="galery">
          <img
            onMouseOver={changeImage}
            src="https://picsum.photos/300/300?1"
            alt={this.props.title}
          />
          <img
            onMouseOver={changeImage}
            src="https://picsum.photos/300/300?2"
            alt={this.props.title}
          />
          <img
            onMouseOver={changeImage}
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="viewer">
          <img src={this.props.image} alt={this.props.title} />
        </div>
      </div>
    );
  }
}

export default Main;
