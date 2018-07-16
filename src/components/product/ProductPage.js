import React, { Component } from "react";
import "./ProductPage.css";
import Main from "./Product_Main";
import Description from "./Product_Desc";

class ProductPage extends Component {
  render() {
    const data = this.props.products;
    let productData = {};
    Object.keys(data).filter(item => {
      // try to solve this problem later in "itemId"
      const itemId = window.location.pathname.split("/");
      if (data[item].id === parseFloat(itemId[2])) {
        productData = data[item];
      }
      return productData;
    });
    return (
      <div className="product-page">
        <Main
          image={productData.product_image}
          title={productData.product_name}
        />
        <Description
          Description={productData.product_desc}
          price={productData.product_price}
          title={productData.product_name}
          id={productData.id}
          addToBasket={this.props.addToBasket}
        />
      </div>
    );
  }
}

export default ProductPage;
