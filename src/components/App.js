import React, { Component } from "react";
import "./App.css";
import Card from "./card/Card";
import { Link } from "react-router-dom";
import Filter from "./filter/Filter";

class App extends Component {
  render() {
    const productData = this.props.products;
    return (
      <div className="App">
        <div className="cards">
          {Object.keys(productData).map(key => {
            return (
              <Link to={`/product/${this.props.products[key].id}`} key={key}>
                <Card index={key} data={this.props.products[key]} />
              </Link>
            );
          })}
        </div>
        <Filter sortMethod={this.props.sortMethod} />
      </div>
    );
  }
}

export default App;
