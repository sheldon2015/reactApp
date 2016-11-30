import React from 'react';
import { render } from 'react-dom';
import router from 'router.jsx';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import combinedReducers from './reducers/reducer.jsx';

const store = createStore(combinedReducers);




//客户端渲染

render(
    <Provider store={store}>
        <Router routes={router} history={browserHistory} />
    </Provider>,
    document.querySelector('#root')
)
