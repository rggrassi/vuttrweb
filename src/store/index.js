import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import createStore from './createStore';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(reducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };