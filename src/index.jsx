import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './reducers';
import App from './components/App';
import './style/global.less';

const rootElement = document.getElementById('root');
const { store, persistor } = Store();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  rootElement
);
