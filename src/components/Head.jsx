import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TOGGLESIDE } from 'const.jsx'

require('./../less/head.less');

class Head extends Component {
    render() {
        return (
            <div className='head text-right'>
                <a className='menu fz16' onClick={this.props.clickHandle} href="javascript:void(0)">menu</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ toggleSide: state.toggleSide })

const mapDispatchToProps = (dispatch) => (
    {
        clickHandle: () => {
            dispatch({ type: TOGGLESIDE })
        }
    }
)



export default connect(mapStateToProps, mapDispatchToProps)(Head);