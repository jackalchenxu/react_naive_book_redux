import { PropTypes } from "prop-types";
import React from "react";

const connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    render() {
      const { store } = this.context;
      let stateProps = mapStateToProps(store.getState());
      return <WrappedComponent {...stateProps} />;
    }
  }

  return Connect;
};

export default connect;
