import React from "react";
import "./Filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter-page">
        <h2>Filter your result</h2>
        <select name="sorted" onChange={() => this.props.sortMethod()}>
          <option value="" />
          <option value="a-z">A - Z</option>
          <option value="z-a">Z - A</option>
        </select>
      </div>
    );
  }
}

export default Filter;
