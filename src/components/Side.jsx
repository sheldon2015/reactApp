import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { TOGGLESIDE } from 'const.jsx';

require('./../less/side.less');


const ACTIVE = {
    color: 'white',
    background: '#ff5722'
}

class NavLink extends Component {

    render() {
        return (<Link activeStyle={ACTIVE} {...this.props} />);
    }
}

class Side extends Component {
    render() {

        let sideClass = 'side';
        //默认true
        let {toggleSide, clickHandle} = this.props;
        toggleSide ? sideClass = sideClass.concat(' side-leave') : sideClass = sideClass.concat(' side-enter');

        return (

            <ul className={sideClass}>
                <li>
                    <IndexLink onClick={clickHandle} activeStyle={ACTIVE} to="/">Home</IndexLink>
                </li>

                <li>
                    <NavLink onClick={clickHandle} to="/investlist">invest list</NavLink>
                </li>

                <li>
                    <NavLink onClick={clickHandle} to="/login">login</NavLink>
                </li>

                <li>
                    <NavLink onClick={clickHandle} to="/regist">regist</NavLink>
                </li>
            </ul>
        );
    }
}


const mapStateToProps = (state) => ({ toggleSide: state.toggleSide });
const mapDispatchToProps = (dispatch, ownProps) => (
    {
        clickHandle: (arg) => {
            dispatch({ type: TOGGLESIDE })
        }
        //可以自定义属性传递给子组件 ownProps:1
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Side);