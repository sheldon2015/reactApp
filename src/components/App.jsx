
import React, { Component } from 'react';
import Side from './Side.jsx';
import Head from './Head.jsx';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const App = (props) => {

    let Modal;
    require.ensure([], function () {
        Modal = require('./Modal.jsx').default;
    });

    return (


        <div className='wrap'>
            <Head />
            <Side />
            <div className='container'>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName='swap'
                    transitionEnterTimeout={500}
                    transitionLeave={false}

                    >
                    {
                        React.cloneElement(props.children || <div />, { key: props.location.pathname })
                    }
                </ReactCSSTransitionGroup>

                {
                    Modal && <Modal />
                }
            </div>

        </div>

    )


};


const mapStateToProps = (state) => ({ toggleSide: state.toggleSide })



export default connect(mapStateToProps)(App);