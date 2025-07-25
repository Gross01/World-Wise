import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {Provider} from "react-redux";
import {createStore} from './services/store'
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore()

root.render(
  <React.StrictMode>
      <HashRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </HashRouter>
  </React.StrictMode>
);
