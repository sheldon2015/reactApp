import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TOGGLESIDE } from 'const.jsx'
import { loginoutActionCreator } from './../actions/loginActionCreator.jsx'

require('./../less/head.less');

class Head extends Component {
    render() {
        return (
            <div className='head'>
                <a className='menu fz16 ' onClick={this.props.clickMenu} href="javascript:void(0)">menu</a>
                {
                    this.props.isLogin && <a className='loginOut fz16' onClick={this.props.clickLoginOut} href="javascript:void(0)">login out</a>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({ toggleSide: state.toggleSide, isLogin: state.login.isLogin })

const mapDispatchToProps = (dispatch) => (
    {
        clickMenu(arg) {
            dispatch({ type: TOGGLESIDE })
        },

        clickLoginOut(arg) {
            dispatch(loginoutActionCreator(arg))
        }
    }
)



export default connect(mapStateToProps, mapDispatchToProps)(Head);