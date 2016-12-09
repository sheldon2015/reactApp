import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from './Loading.jsx';
import loginActionCreator from './../actions/loginActionCreator.jsx'
require('./../less/regist.less');
class Login extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };
    transition = () => {
        const path = `/account`
        this.context.router.push(path);
    }
    submitHandle = (e) => {
        e.preventDefault();
        this.props.handle(this.transition);
    }
    render() {
        return (
            <div className='login'>
                <h1 className='sign fz16 text-center'>sign in</h1>
                <form onSubmit={(e) => this.submitHandle(e)}>
                    <div className='item'>
                        <label htmlFor="phone">phone:</label>
                        <input id='phone' name="phone" defaultValue='' />
                    </div>
                    <div className='item'>
                        <label htmlFor="password">password:</label>
                        <input id='password' name="password" defaultValue='' />
                    </div>
                    <input className='submit' type="submit" value="submit" />
                </form>
                {
                    this.props.login.isFetching && <Loading />
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({ login: state.login })
const mapDispatchToProps = (dispatch) => ({
    handle(cb) {
        dispatch(loginActionCreator(cb))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);