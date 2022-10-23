import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header'
import Goods from './Goods/Goods'
import Basket from './Basket/Basket'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <div className='marketplace'>

        <Header />

        <div className='header-basket-box'>
          <Goods />
          <Basket />
        </div>

      </div>
    </React.StrictMode>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
