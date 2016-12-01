import { combineReducers } from 'redux'
import { TOGGLESIDE, FETCHLIST, FETCH_INVESTLIST, RECEIVE_INVESTLIST } from 'const.jsx';
//UI状态,默认true,不可见
const toggleSide = (prevstate = true, action) => {
    switch (action.type) {
        case TOGGLESIDE:
            return !prevstate;
        default:
            return prevstate;
    }
}
const investList = (
    prevstate = {
        isFetching: false,
        pageNumber: 0,
        data: []
    }, action) => {

    switch (action.type) {

        case FETCH_INVESTLIST:
            return {
                ...prevstate,
                isFetching:true
            };

        case RECEIVE_INVESTLIST:

            return {
                ...prevstate,
                isFetching: false,
                data: prevstate.data.concat(action.data)
            }
        default:
            return prevstate;
    
    }
}



const reducers = combineReducers({
    toggleSide,   
    investList
})



export default reducers;