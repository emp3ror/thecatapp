import React, { Component, Fragment } from "react";

import "./single-cat.scss";

class SingleCat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.data;
    return (
      <div className="c-singleCat">
        <img src={item.url} alt="" className="c-singleCat__img" />
        <span className="c-singleCat__id">{item.id}</span>
      </div>
    );
  }
}
export default SingleCat;
