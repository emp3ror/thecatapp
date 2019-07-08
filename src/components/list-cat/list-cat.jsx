import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { catActions } from "../../_state/_actions/";
import SingleCat from "../single-cat/single-cat";
import "./list-cat.css";

class listcat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(catActions.getLists());
  }

  handleLoadMoreClick() {
    this.setState({
      page: this.state.page + 1
    });
    console.log("handle click");
    const { dispatch } = this.props;
    dispatch(catActions.getLists(this.state.page, true));
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
    return (
      <Fragment>
        <div className="c-list">{comp}</div>
        <div className="c-holder__text--center">
          <div className="btn c-btn--load" onClick={this.handleLoadMoreClick}>
            Load More
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.cats
  };
}

export default connect(mapStateToProps)(listcat);
