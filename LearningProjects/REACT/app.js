import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", key: "heading" },
  "Hello, React!",
);

const jsxHeading = (
  <div>
    {heading}
    <h1 id="heading">Hello kaushinder, React!</h1>
  </div>
);

const number = 1000;

const elem = <span>React element</span>

const HeadingComponent = () => {
  return (
    <div id="container">
      {elem}
      {number}
      {jsxHeading}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
