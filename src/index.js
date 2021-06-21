import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const items = [{ id: 1, text: "test", completed: false }, 
               { id: 2, text: "test2", completed: false }, 
               { id: 3, text: "test3", completed: false }]

ReactDOM.render(
  <React.StrictMode>
    <App items={items}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
