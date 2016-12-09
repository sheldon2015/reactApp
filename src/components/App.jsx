
import React, { Component } from 'react';
import Side from './Side.jsx';
import Head from './Head.jsx';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('./../less/global.less')

const App = (props) => {

    let Modal;
    require.ensure([], function () {
        Modal = require('./Modal.jsx').default;
    });


    return (
        <div className='wrap'>
            <Head />
            <Side />
            <ReactCSSTransitionGroup className='container'
                component="div"
                transitionName='swap'
                transitionEnterTimeout={500}
                transitionLeave={false}
                >
                {
                    //React.cloneElement(props.children, { key: props.location.pathname })注意区分组件和react元素，react元素是由组件构成的
                    <props.children.type key={props.location.pathname} />
                }
            </ReactCSSTransitionGroup>
            {
                Modal && <Modal />
            }

        </div>

    )


};


const mapStateToProps = (state) => ({ toggleSide: state.toggleSide })



export default connect(mapStateToProps)(App);