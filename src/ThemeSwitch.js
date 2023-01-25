import React from "react";
import { PropTypes } from "prop-types";

class ThemeSwitch extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  handleSwitchColor(color) {
    const { store } = this.context;
    store.dispatch({
      type: "CHANGE_THEME",
      themeColor: color,
    });
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

export default ThemeSwitch;
