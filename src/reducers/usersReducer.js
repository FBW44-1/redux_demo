
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from '../actions/actionTypes';


const initialState = {
    loading: false,
    users: [],
    error: ''
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
    
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export default usersReducer;