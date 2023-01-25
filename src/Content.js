import React from "react";
import { PropTypes } from "prop-types";
import ThemeSwitch from "./ThemeSwitch";
import connect from "./Connect";

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  };
};

class Content extends React.Component {
  static propTypes = {
    themeColor: PropTypes.string,
  };

  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js content</p>
        <ThemeSwitch />
      </div>
    );
  }
}

Content = connect(mapStateToProps)(Content);
export default Content;
