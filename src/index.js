import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { announcementReducer } from './redux/reducer';

const store = createStore(announcementReducer);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
