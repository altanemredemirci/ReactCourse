import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./redux/reducers/configureStore"
import { Provider } from 'react-redux';

const store = configureStore();

//store: Bütün stateleri barındırır.

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));

reportWebVitals();
