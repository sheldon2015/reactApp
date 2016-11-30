import { combineReducers } from 'redux'
import { TOGGLESIDE, FETCHLIST } from './../const.jsx';



//UI状态
const toggleSide = (prevstate = true, action) => {
    switch (action.type) {
        case TOGGLESIDE:
            return !prevstate;
        default:
            return prevstate;
    }
}


//获取列表
const investList = (
    prevstate = [
        {
            "lilv": "10%",
            "qixian": "1",
            "zonge": "5.00",
            "zhuangtai": "待放款"
        }
    ], action) => {
    switch (action.type) {
        case FETCHLIST:
            return prevstate;
        default:
            return prevstate;
    }
}

const reducers = combineReducers({
    toggleSide,
    investList
})



export default reducers;