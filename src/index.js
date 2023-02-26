import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import './fonts/Gilroy/Gilroy-Light.ttf';
import './fonts/Gilroy/Gilroy-Regular.ttf';
import './fonts/Gilroy/Gilroy-Medium.ttf';
import './fonts/Gilroy/Gilroy-SemiBold.ttf';
import './fonts/Gilroy/Gilroy-Bold.ttf';
import store from './data/store';
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
