import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TOGGLESIDE } from 'const.jsx'

require('./../less/head.less');

class Head extends Component {
    render() {
        return (
            <div className='head text-right'>
                <a onClick={this.props.clickHandle} href="javascript:void(0)">menu</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { toggleSide: state.toggleSide } }

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandle: () => {
            dispatch({ type: TOGGLESIDE })
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Head);