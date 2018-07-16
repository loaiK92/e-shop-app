import React, { Component } from "react";
import { Link } from "react-router-dom";

class Description extends Component {
  countRef = React.createRef();
  render() {
    return (
      <div className="product-desc">
        <div className="details">
          <h2>{this.props.title}</h2>
          <p>{this.props.Description}</p>
          <span>
            Price : <small> {this.props.price} &#8364; </small>
          </span>
        </div>
        <div className="buttons">
          <label htmlFor="quantity-input">Quantity : </label>
          <input
            id="quantity-input"
            type="number"
            ref={this.countRef}
            defaultValue="1"
            onChange={e => {
              if (e.target.value <= 0) {
                e.target.value = 1;
              }
            }}
          />
          <button
            className="addToBasket-btn"
            onClick={() => {
              this.props.addToBasket(
                this.props.id,
                this.countRef.current.value
              );
            }}
          >
            Add To Basket
          </button>
          <Link className="link-basket" to="/basket">
            View Basket
          </Link>
        </div>
      </div>
    );
  }
}

export default Description;
