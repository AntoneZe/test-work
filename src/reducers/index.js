import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import phoneReducers from './phoneReducers';

const rootReducer = combineReducers({
  phone: phoneReducers,
});

const persistConfig = {
  key: 'phone',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools());
  let persistor = persistStore(store);
  return { store, persistor };
};
