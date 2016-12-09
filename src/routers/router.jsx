import React, { Component } from 'react';
import App from './../components/App.jsx'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'


const router =
    <Route path='/' component={App}>
        <IndexRoute getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./../components/Home.jsx').default
                )
            })
        } }  />
        <Route path='login' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./../components/Login.jsx').default
                )
            })
        } } />
        <Route path='investlist' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./../components/Investlist.jsx').default
                )
            })
        } }


            />
        <Route path='regist' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./../components/Regist.jsx').default
                )
            })
        } } />
        <Route path='account' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./../components/Account.jsx').default
                )
            })
        } } />


    </Route>



export default router;