import React from "react";
import ReactDOM from "react-dom";
import Entirecode from "./Entirecode.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
function App() {
  return (
<div className="App">
  <Entirecode />
</div>
  );
}
const rootElement = document.getElementById("root"); ReactDOM.render(
<App />, rootElement);
