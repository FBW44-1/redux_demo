
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from './actionTypes';


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUsersFail = (msg) => {
    return {
        type: FETCH_USERS_FAIL,
        payload: msg
    }
}