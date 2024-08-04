import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const url ='https://github.com/mubirshami/TimeFarmTelegram/blob/main/public/tonconnect-manifest.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TonConnectUIProvider manifestUrl={url}>
    <App />
  </TonConnectUIProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
