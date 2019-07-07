import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CategoryList from "../components/category/category";
import Listcat from "../components/list-cat/list-cat";
import "./app.css";

class App extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="wrapper">
        <div className="l-sidebar">
          <CategoryList />
        </div>
        <div className="l-main">
          <Listcat />
        </div>
      </div>
    );
  }
}
// export default App;
function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
