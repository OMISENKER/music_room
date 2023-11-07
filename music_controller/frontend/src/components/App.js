import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Test, React render</h1>
    </div>
  )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
