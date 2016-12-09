
import { LOGINING, LOGINED } from 'const.jsx';

function logining() {
    return {
        type: 'LOGINING'
    }
}
function logined({isLogin}) {
    return {
        type: 'LOGINED',
        isLogin: isLogin
    }
}


export const loginoutActionCreator = () => {

    return dispatch => {

        dispatch(logining());

        return new Promise((resolve, reject) => (
            setTimeout(function () {
                resolve({ isLogin: false })
            }, 500)

        )).then(res => dispatch(logined(res))).catch(err => console.log(err))

    }


}




export default function loginActionCreator(cb) {

    return dispatch => {

        dispatch(logining());

        return new Promise((resolve, reject) => (
            setTimeout(function () {
                resolve({ isLogin: true })
                cb()
            }, 500)

        )).then(res => dispatch(logined(res))).catch(err => console.log(err))

    }
}