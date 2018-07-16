import React, { Component } from "react";
import "./ProductCard.css";
import Main from "./Card_Main";
import Description from "./Card_Desc";

class ProductCard extends Component {
  render() {
    const productData = this.props.data;
    return (
      <div className="productCard">
        <Main
          image={productData.product_image}
          title={productData.product_name}
        />
        <Description
          title={productData.product_name}
          price={productData.product_price}
        />
      </div>
    );
  }
}

export default ProductCard;
