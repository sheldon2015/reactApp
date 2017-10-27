import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TOGGLESIDE } from "const.jsx";
import { loginoutActionCreator } from "./../actions/loginActionCreator.jsx";
import Yilule from "./Yilule.jsx";

require("./../less/head.less");

class Head extends Component {
    componentDidMount() {}
    render() {
        // let { dispatch } = this.props;
        // let bac = bindActionCreators(
        //     {
        //         a() {
        //             console.log("testa");
        //             return { type: "testa" };
        //         },
        //         b() {
        //             return { type: "testb" };
        //         }
        //     },
        //     dispatch
        // );
        return (
            <div className="head">
                <a
                    className="menu fz16 "
                    onClick={this.props.clickMenu}
                    href="javascript:void(0)">
                    menu
                </a>
                {this.props.isLogin &&
                    <a
                        className="loginOut fz16"
                        onClick={this.props.clickLoginOut}
                        href="javascript:void(0)">
                        login out
                    </a>}

                {/*<Yilule {...bac} />*/}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    toggleSide: state.toggleSide,
    isLogin: state.login.isLogin
});

const mapDispatchToProps = dispatch => ({
    clickMenu(arg) {
        //dispatch返回的是dispatch的参数对象
       dispatch({ type: TOGGLESIDE });
    },

    clickLoginOut(arg) {
        dispatch(loginoutActionCreator(arg));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Head);
