import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux'

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
        this.props.toggleSide ? sideClass = sideClass.concat(' side-leave') : sideClass = sideClass.concat(' side-enter');

        return (

            <ul className={sideClass}>
                <li>
                    <IndexLink activeStyle={ACTIVE} to="/">Home</IndexLink>
                </li>

                <li>
                    <NavLink to="/investlist">invest list</NavLink>
                </li>

                <li>
                    <NavLink to="/login">login</NavLink>
                </li>

                <li>
                    <NavLink to="/regist">regist</NavLink>
                </li>
            </ul>
        );
    }
}


const mapStateToProps = (state) => { return { toggleSide: state.toggleSide } }

export default connect(mapStateToProps)(Side);