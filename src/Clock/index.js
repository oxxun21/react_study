import React from 'react';
import ReactDOM from 'react-dom/client';

import Clock from '../src/Clock/clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
})
