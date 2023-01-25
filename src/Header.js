import { PropTypes } from "prop-types";
import React from "react";

class Header extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor() {
    super();
    this.state = { themeColor: "" };
  }

  componentDidMount() {
    const { store } = this.context;
    this._updateThemeColor();
    store.subscribe(this._updateThemeColor);
  }

  _updateThemeColor = () => {
    const { store } = this.context;
    const state = store.getState();
    this.setState({ themeColor: state.themeColor });
  };

  render() {
    return (
      <h1 style={{ color: this.state.themeColor }}>React.js naive book</h1>
    );
  }
}

export default Header;
