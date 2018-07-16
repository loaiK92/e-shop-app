import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Basket from "./basket/Basket";
import data from "./data";
import ProductPage from "./product/ProductPage";

class Router extends React.Component {
  state = {
    products: data,
    basket: {}
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("basket");
    if (localStorageRef) {
      this.setState({ basket: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    const count = Object.keys(this.state.basket);
    document.getElementById("basket_counter").innerHTML = count.length || 0;

    localStorage.setItem("basket", JSON.stringify(this.state.basket));
  }

  addToBasket = (id, quantity) => {
    const basketData = { ...this.state.basket };

    Object.keys(this.state.products).filter(key => {
      if (this.state.products[key].id === id) {
        const price =
          parseFloat(this.state.products[key].product_price) *
          parseFloat(quantity);
        basketData[key] = { id, quantity, price };
      }
    });

    this.setState({
      basket: basketData
    });
  };

  price = (theprice, quantity, index, id) => {
    const basketData = { ...this.state.basket };

    Object.keys(this.state.products).filter(key => {
      if (this.state.products[key].id === id) {
        const price1 = parseFloat(theprice) * parseFloat(quantity);
        basketData[key] = { id, quantity, price: price1 };
      }
    });

    this.setState({
      basket: basketData
    });
  };

  deleteFromBasket = id => {
    const basketData = { ...this.state.basket };
    Object.keys(basketData).map(index => {
      if (basketData[index].id === id) {
        delete basketData[index];
      }
    });
    this.setState({
      basket: basketData
    });
  };

  sortMethod = () => {
    const basketData = { ...this.state.products 7;
    const keysArray = [];
    Object.keys(basketData).map(key => {
      keysArray.push(basketData[key].product_name);
    });
    console.log("before ", basketData);
    keysArray.sort();
    console.log("after ", keysArray);
  };


  

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <App sortMethod={this.sortMethod} products={this.state.products} />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage
              addToBasket={this.addToBasket}
              products={this.state.products}
            />
          </Route>
          <Route exact path="/basket">
            <Basket
              price={this.price}
              deleteFromBasket={this.deleteFromBasket}
              products={this.state.products}
              basket={this.state.basket}
            />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
