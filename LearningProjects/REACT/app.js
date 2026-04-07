import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { className: "parent", key: "parent" },
  [
    React.createElement("div", { className: "child1", key: "child1" }, [
      React.createElement("h1", { className: "heading1", key: "heading1" }, "I am child 1"),
      React.createElement("h2", { className: "heading2", key: "heading2" }, "I am child 1.1"),
    ]),
    React.createElement("div", { className: "child2", key: "child2" }, [
      React.createElement("h3", { className: "heading3", key: "heading3" }, "I am child 2"),
      React.createElement("h4", { className: "heading4", key: "heading4" }, "I am child 2.1"),
    ]),
  ],
  "Hello, React!",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
