import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
