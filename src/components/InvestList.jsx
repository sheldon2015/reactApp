import React, { Component } from 'react';
import InvestListItem from './InvestListItem.jsx';
import { connect } from 'react-redux'
import { FETCHLIST } from 'const.jsx'
import Loading from './Loading.jsx';

import investListActionCreator from './../actions/investListActionCreator.jsx';


require('./../less/investList.less');


class InvestList extends Component {


    componentWillMount() {
        this.props.handle(0)
    }

    render() {
        return (
            <div>
                {
                    <div>
                        <ul className='investList'>
                            {
                                this.props.investList.isFetching ?
                                    this.props.investList.data.map((value, index) => {
                                        return <InvestListItem key={index} value={value} />
                                    })

                                    : this.props.investList.data.map((value, index) => {
                                        return <InvestListItem key={index} value={value} />
                                    })
                            }
                            {
                                this.props.investList.isFetching && <Loading />
                            }

                        </ul>



                        <a onClick={() => this.props.handle(1)} className='loadmore' href="javascript:void(0)">load more</a>

                    </div>
                }
            </div>
        );
    }
}






const mapStateToProps = (state) => ({ investList: state.investList })

const mapDispatchToProps = (dispatch) => ({

    handle(number) {
        dispatch(investListActionCreator(number))
    }

})


export default connect(mapStateToProps, mapDispatchToProps)(InvestList);