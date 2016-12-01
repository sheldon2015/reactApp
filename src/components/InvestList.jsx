import React from 'react';
import InvestListItem from './InvestListItem.jsx';
import { connect } from 'react-redux'
import { FETCHLIST } from 'const.jsx'
import Loading from './Loading.jsx';

import investListActionCreator from './../actions/investListActionCreator.jsx';

require('./../less/investList.less');


const InvestList = (props) => {


    return (
        <div>
            <ul className='investList'>
                {
                    props.investList.isFetching ? <Loading /> : props.investList.data.map((value, index) => {
                        return <InvestListItem key={index} value={value} />
                    })
                }

            </ul>
            <a className='text-center loadmore' onClick={(e) => { e.preventDefault(); props.clickHandle(11) } } >load more</a>
        </div>
    );
}



const mapStateToProps = (state) => ({ investList: state.investList })

const mapDispatchToProps = (dispatch) => ({
    clickHandle(number) {
        dispatch(investListActionCreator(number))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(InvestList);