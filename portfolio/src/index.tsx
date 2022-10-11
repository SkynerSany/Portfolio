import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';

const container = document.querySelector('.container')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
