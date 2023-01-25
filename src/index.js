import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import Content from "./Content";
import { createStore, themeReducer } from "./Store";
import { PropTypes } from "prop-types";

class Index extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return { store };
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

const store = createStore(themeReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Index />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
