import { PropTypes } from "prop-types";
import React from "react";

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends React.Component {
    static contextTypes = {
      store: PropTypes.object,
    };

    constructor() {
      super();
      this.state = {};
    }

    //更新初始状态，执行subscribe
    componentDidMount() {
      const { store } = this.context;
      this._updateProps();
      //bug: store.subscribe(()=>this._updateProps);
      store.subscribe(() => {
        this._updateProps();
      });
    }

    _updateProps() {
      const { store } = this.context;
      let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch)
        : {};

      this.setState({
        ...stateProps,
        ...dispatchProps,
        ...this.props,
      });
    }

    render() {
      const { store } = this.context;
      let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch)
        : {};
      return (
        <WrappedComponent {...stateProps} {...dispatchProps} {...this.props} />
      );
    }
  }

  return Connect;
};

export default connect;
