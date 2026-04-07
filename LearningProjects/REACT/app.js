const parent = React.createElement(
  "div",
  { className: "parent" },
  [
    React.createElement("div", { className: "child1" }, [
      React.createElement("h1", { className: "heading1" }, "I am child 1"),
      React.createElement("h2", { className: "heading2" }, "I am child 1.1"),
    ]),
    React.createElement("div", { className: "child2" }, [
      React.createElement("h3", { className: "heading3" }, "I am child 2"),
      React.createElement("h4", { className: "heading4" }, "I am child 2.1"),
    ]),
  ],
  "Hello, React!",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
