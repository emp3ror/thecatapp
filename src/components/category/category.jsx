import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { catActions } from "../../_state/_actions/";
import "./category.scss";

class Categorylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    console.log("called");
    const { dispatch } = this.props;
    dispatch(catActions.getCategories());
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    const { category } = this.props;
    console.log(category);

    let comp;
    if (category.loading) {
      comp = <div>loading...</div>;
    } else if (category.data) {
      comp = category.data.map((item, key) => (
        <li
          key={item.id}
          onClick={() => this.handleClick(item.id)}
          className="c-category__item"
        >
          <a>{item.name}</a>
        </li>
      ));
    }
    return (
      <Fragment>
        <ul className="c-category">{comp}</ul>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    category: state.category
  };
}

export default connect(mapStateToProps)(Categorylist);
