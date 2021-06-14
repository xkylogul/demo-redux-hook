import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store'
//import {CreateContext} from './utils/context'//不使用context，react-redux直接封装好了
import {Provider} from 'react-redux'

/* ReactDOM.render(
  <CreateContext.Provider value={store}>   //这是CreateContext使用方法
    <App/>
  </CreateContext.Provider>,
  document.getElementById('root')
); */

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

