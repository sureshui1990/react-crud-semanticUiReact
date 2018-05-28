import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";
import  'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './assets/js/registerServiceWorker';
import logger from 'redux-logger'

const store = createStore(reducers, applyMiddleware(logger));

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
render()
store.subscribe(render)
