import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
var style = {
  color: "yellow",
  backgroundColor: "black",
  padding: "20px",
  textAlign: "center",
  fontSize: "30px",
  margin: "20px",
  borderRadius: "10px",
  border: ".5px solid yellow",
};
root.render(<h1 style={style}>life is full of lie</h1>);
