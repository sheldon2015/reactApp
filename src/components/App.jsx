
import React, { Component } from 'react';
import Side from './Side.jsx';
import Head from './Head.jsx';
import { connect } from 'react-redux';
const App = (props) => {

    let Modal;
    require.ensure([], function () {
        Modal = require('./Modal.jsx').default;
    });
    return (
        <div>
            <Head />
            <Side />
            <div className='container'>
                {
                    props.children
                }
            </div>
            {
                Modal && <Modal />
            }
        </div>
    )


};


const mapStateToProps = (state) => { return { toggleSide: state.toggleSide } }



export default connect(mapStateToProps)(App);