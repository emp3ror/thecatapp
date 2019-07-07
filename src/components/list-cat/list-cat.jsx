import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { catActions } from "../../_state/_actions/";
import SingleCat from "../single-cat/single-cat";
import "./list-cat.css";

class listcat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    console.log("called");
    const { dispatch } = this.props;
    dispatch(catActions.getLists());
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    const { list } = this.props;
    console.log(list);

    let comp;
    if (list.loading) {
      comp = <div>loading...</div>;
    } else if (list.data) {
      comp = "not loading";

      comp = list.data.map((item, key) => (
        <div key={item.id} className="l-4">
          <SingleCat data={item} />
        </div>
      ));
    }
    return <div className="c-list">{comp}</div>;
  }
}

function mapStateToProps(state) {
  return {
    list: state.cats
  };
}

export default connect(mapStateToProps)(listcat);
