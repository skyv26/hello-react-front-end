import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StyleResetter from './StyleResetter/StyleResetter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;400;700&family=Josefin+Sans:wght@100;300;400;700&display=swap" rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
    <StyleResetter />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
