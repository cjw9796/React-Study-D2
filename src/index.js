import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Mapsample from './Mapsample';
import Use from './URef';
import Ueffect from './UEffect';
import Timer from './Timer';
import Ueffectsample from './Ueffectsample';
import UeffectUnmount from './UeffectUnmount';

import reportWebVitals from './reportWebVitals';
import Udom from './Udom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Use />
    <Ueffect/>
    <Udom/>
    <Ueffectsample/>
    <UeffectUnmount />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <App />
// <Mapsample/>