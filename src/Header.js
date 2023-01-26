import { PropTypes } from "prop-types";
import React from "react";
import connect from "./Connect";
import { mapStateToProps, mapDispatchToProps } from "./MapToProps";

class Header extends React.Component {
  static propTypes = {
    themeColor: PropTypes.string,
  };

  render() {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js naive book</h1>
    );
  }
}

Header = connect(mapStateToProps)(Header);
export default Header;
