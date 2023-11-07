import React from 'react';
import { render } from 'react-dom';

export const App = () => {
  return (
    <div><h1>Test, Please work</h1></div>
  )
}

export default App();

const appDiv = document.getElementById("app");
render(<App />, appDiv);
