import React from "react";
import { PropTypes } from "prop-types";
import connect from "./Connect";
import { mapDispatchToProps } from "./MapToProps";

class ThemeSwitch extends React.Component {
  static propTypes = {
    setThemeColor: PropTypes.func,
  };

  handleSwitchColor(color) {
    if (this.props.setThemeColor) {
      this.props.setThemeColor(color);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSwitchColor.bind(this, "Red")}>Red</button>
        <button onClick={this.handleSwitchColor.bind(this, "Blue")}>
          Blue
        </button>
      </div>
    );
  }
}

ThemeSwitch = connect(null, mapDispatchToProps)(ThemeSwitch);
export default ThemeSwitch;
