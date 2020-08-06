import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 路由模式hash
import {HashRouter,BrowserRouter} from 'react-router-dom'
import './assets/js/rem'
import './assets/css/reset.css'

Component.prototype.$img= 'http://localhost:3000'
ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

