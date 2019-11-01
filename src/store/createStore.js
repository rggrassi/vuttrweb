import { createStore, applyMiddleware, compose } from 'redux';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();

export default (reducers, middlewares) => {
    const enhancer = process.env.NODE_ENV === 'development' 
        ? compose(applyMiddleware(...middlewares), devTools)
        : applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}