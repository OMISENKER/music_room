import React from "react";
import { createRoot, render } from "react-dom/client";
import { HomePage } from "./HomePage";

function App(props) {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App/>);

