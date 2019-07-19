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
        <div className="c-singleCat--holder">
          <img src={item.url} alt="" className="c-singleCat__img" />
          <span className="c-singleCat__id">{item.id}</span>
        </div>
      </div>
    );
  }
}
export default SingleCat;
