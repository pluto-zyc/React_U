import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 路由模式hash
import {HashRouter,BrowserRouter} from 'react-router-dom'
import './assets/js/rem'
import './assets/css/reset.css'
import {Provider} from 'react-redux'
import  store from './store/index'
Component.prototype.$img= 'http://localhost:3000'
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter></Provider>,
  document.getElementById('root')
);

