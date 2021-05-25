import { combineReducers } from 'redux';
import countReducer from './countReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
    countState: countReducer,
    usersState: usersReducer 

})

export default rootReducer;