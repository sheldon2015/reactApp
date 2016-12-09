import React from 'react';
import { render } from 'react-dom';
import router from './routers/router.jsx';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from './reducers/reducer.jsx';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';



const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {

    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);


}



const store = createStore(combinedReducers, applyMiddleware(
    ...middleware
));



render(
    <Provider store={store}>
        <Router routes={router} history={browserHistory} />
    </Provider>,
    document.querySelector('#root')
)
