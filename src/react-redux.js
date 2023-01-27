import React from "react";
import { PropTypes } from "prop-types";

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    constructor() {
      super();
      this.state = { allProps: {} };
    }

    componentDidMount() {
      const { store } = this.context;
      this._updateProps(store);
      store.subscribe(() => this._updateProps());
    }

    _updateProps(store) {
      this.setState({ allProps: mapStateToProps(store.getState()) });
    }

    render() {
      const { store } = this.context;
      let stateProps = mapStateToProps(store.getState());

      return <WrappedComponent {...stateProps} />;
    }
  }

  return Connect;
};

class Provider extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return { store: this.props.store };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export { connect, Provider };
