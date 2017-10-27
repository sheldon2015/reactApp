import { combineReducers } from "redux";
import {
	TOGGLESIDE,
	FETCHLIST,
	FETCH_INVESTLIST,
	RECEIVE_INVESTLIST,
	LOGINING,
	LOGINED
} from "const.jsx";
//UI状态,默认true,不可见
const toggleSide = (prevstate = true, action) => {
	console.log("enter  toggleSide");
	switch (action.type) {
		case TOGGLESIDE:
			return !prevstate;

		default:
			return prevstate;
	}
};
//投资列表
const investList = (
	prevstate = {
		isFetching: false,
		pageNumber: 0,
		data: []
	},
	action
) => {
	console.log("enter  investList");

	switch (action.type) {
		case FETCH_INVESTLIST:
			return {
				...prevstate,
				isFetching: true
			};

		case RECEIVE_INVESTLIST:
			return {
				...prevstate,
				isFetching: false,
				data: prevstate.data.concat(action.data)
			};

		default:
			return prevstate;
	}
};
const login = (
	prevstate = {
		isFetching: false,
		isLogin: false
	},
	action
) => {
	console.log("enter  login");

	switch (action.type) {
		case LOGINING:
			return {
				...prevstate,
				isFetching: true
			};

		case LOGINED:
			return {
				...prevstate,
				isFetching: false,
				isLogin: action.isLogin
			};

		default:
			return prevstate;
	}
};
const isFetching = (isFetching = false, action) => {
	console.log("enter  isfetching");
	switch (action.type) {
		case LOGINING:
			return !isFetching;

		case LOGINED:
			return isFetching;

		default:
			return isFetching;
	}
};

const reducers = combineReducers({ toggleSide, investList, login, isFetching });

export default reducers;
