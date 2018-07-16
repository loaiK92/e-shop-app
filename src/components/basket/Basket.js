import React, { Component } from "react";
import "./Basket.css";

class Basket extends Component {
  quantityRef = React.createRef();
  roundedNum = num => {
    return num.toFixed(2);
  };

  render() {
    const basket = this.props.basket;
    let basketData = [];
    Object.keys(basket).map(key => {
      const data = {
        item: this.props.products[key],
        quantity: basket[key].quantity,
        price: basket[key].price,
        key: key
      };
      basketData.push(data);
    });

    const orderedItems = Object.keys(basket);
    const total = orderedItems.reduce((prevTotal, key) => {
      const item = this.props.products[key];
      const count = basket[key].quantity;
      if (item) {
        return (
          parseFloat(prevTotal) +
          parseFloat(count) * parseFloat(item.product_price)
        );
      }
      return prevTotal;
    }, 0);

    return (
      <div className="basket-page">
        <ul>
          {basketData.map(element => {
            // console.log(basketData)
            return (
              <li className="basket-list" key={element.item.product_name}>
                <img
                  src={element.item.product_image}
                  alt={element.item.product_name}
                />
                <h2>{element.item.product_name}</h2>
                <p>{element.item.product_desc}</p>
                <label>Quantity: </label>
                <input
                  type="number"
                  ref={this.quantityRef}
                  defaultValue={element.quantity}
                  onChange={e => {
                    if (e.target.value <= 0) {
                      e.target.value = 1;
                    }
                    this.props.price(
                      element.item.product_price,
                      e.target.value,
                      element.key,
                      element.item.id
                    );
                  }}
                />

                <span>price : {this.roundedNum(element.price)} &#8364;</span>
                <button
                  className="deleteBtn"
                  onClick={() => this.props.deleteFromBasket(element.item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <div className="total-price">
          <p>
            Total: <span>{this.roundedNum(total)} &#8364;</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Basket;
