import React, { Component } from 'react';
require('./../less/regist.less');

class Login extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };
    submitHandle = (e) => {
        e.preventDefault();
        const path = `/account`;
        this.context.router.push(path);
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
            </div>
        );
    }
}

export default Login;