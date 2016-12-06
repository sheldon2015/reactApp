import React, { Component } from 'react';

require('./../less/regist.less');


class Regist extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    submitHandle = (e) => {
        e.preventDefault();
        const path = `/login`;
        this.context.router.push(path);
    }


    render() {
        return (
            <div className='regist'>
                <h1 className='sign fz16 text-center'>sign up</h1>
                <form onSubmit={(e) => this.submitHandle(e)}>
                    <div className='item'>
                        <label htmlFor="phone">phone:</label>
                        <input id='phone' name="phone" defaultValue='' />
                    </div>
                    <div className='item'>
                        <label htmlFor="password">password:</label>
                        <input id='password' name="password" defaultValue='' />
                    </div>
                    <div className='item'>
                        <label htmlFor="username">username:</label>
                        <input id='username' name="username" defaultValue='' />
                    </div>
                    <input className='submit' type="submit" value="submit" />
                </form>
            </div>
        );
    }
}




export default Regist;