import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default function(reducers) {
    const persistedReducer = persistReducer({
        key: 'vuttr',
        storage,
        whitelist: ['token', 'user']
    }, reducers)

    return persistedReducer;
}