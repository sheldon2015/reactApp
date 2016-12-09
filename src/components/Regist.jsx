import React, { Component } from 'react';
import Loading from './Loading.jsx';

require('./../less/regist.less');


class Regist extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };
    constructor(props, context) {
        super(props, context);
        this.state = {
            isFetching: false
        }

    }
    submitHandle = (e) => {
        e.preventDefault();

        new Promise((resolve, reject) => {
            this.setState({
                isFetching: true
            })

            setTimeout(resolve, 5000)

        }).then((resolve) => {

            this.setState({
                isFetching: false
            })
            const path = `/login`;
            this.context.router.push(path);


        }).catch((err) => {
            console.log(err);
        })

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
                {
                    this.state.isFetching && <Loading />
                }
            </div>
        );
    }
}




export default Regist;