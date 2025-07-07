import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {Provider} from "react-redux";
import {createStore} from './services/store'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore()

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);
