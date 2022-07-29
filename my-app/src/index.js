import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruits);
let leftover = remove(fruits, fruit);

function App() {
  return (
    <ul>
      <li>I'd like one {fruit}, please</li>
      <li>Here you go: {fruit}</li>
      <li>Delicious! May I have another?</li>
      <li>`I'm sorry, we're all out. We have ${leftover.length} left.</li>
    </ul>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
