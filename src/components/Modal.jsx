import React from 'react';
import { connect } from 'react-redux'
import { TOGGLESIDE } from './../const.jsx';

const Modal = (props) => {

    let modalClass = 'modal';
    props.toggleSide ? modalClass = modalClass.concat(' modal-out') : modalClass = modalClass.concat(' modal-in');
    return (
        <div onClick={props.clickHandle} className={modalClass}>
        </div>
    );
};



const mapStateToProps = (state) => { return { toggleSide: state.toggleSide } }
const mapDispatchToProps = (dispatch) => {
    return {
        clickHandle: () => {
            dispatch({ type: TOGGLESIDE })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);