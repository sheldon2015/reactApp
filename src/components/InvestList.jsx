import React from 'react';
import InvestListItem from './InvestListItem.jsx';
import { connect } from 'react-redux'
import { FETCHLIST } from 'const.jsx'

require('./../less/investList.less');


const InvestList = (props) => {

    return (
        <div>
            <ul className='investList'>
                {
                    props.investList.map((value, index) => {
                        return <InvestListItem key={index} value={value} />
                    })
                }

            </ul>
            <button onClick={() => { props.clickHandle(2) } } type="button" >click</button>
        </div>
    );
}



const mapStateToProps = (state) => { return { investList: state.investList } }

const mapDispatchToProps = (dispatch) => {
    return {
        clickHandle(number) {
            dispatch({
                type: FETCHLIST,
                pageNumber: number
            })
        }
    }
}








export default connect(mapStateToProps, mapDispatchToProps)(InvestList);