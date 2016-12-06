
import { FETCH_INVESTLIST, RECEIVE_INVESTLIST } from 'const.jsx';
import axios from 'axios';

function fetchList() {
    return {
        type: 'FETCH_INVESTLIST'
    }
}
function receiveList(data) {
    return {
        type: 'RECEIVE_INVESTLIST',
        data: data
    }
}
export default function investListActionCreator(pageNumber) {

    return (dispatch) => {
        dispatch(fetchList())//发出请求获取list
        return setTimeout(() => {
            axios({
                url: '/data/investlist.json',
                params: {
                    pageNumber: pageNumber
                }
            }).then(function (response) {
                dispatch(receiveList(response.data))//请求成功
            }).catch(function (error) {
                console.log(error);
            });

        }, 2000)

    }
}