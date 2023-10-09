import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';

import './index.css';

const root = document.getElementById('root');

const div = React.createElement('div', {
  name: 'Profile',
  class: 'profileClass',
});

console.log('div :>>', div);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
