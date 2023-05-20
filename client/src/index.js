import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './components/LandingPage'; // Import your LandingPage component
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

// Render the LandingPage initially
ReactDOM.render(
  <React.StrictMode>
    <LandingPage renderApp={renderApp} />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
