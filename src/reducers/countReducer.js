import { INCREMENT, DECREMENT, RESET } from '../actions/actionTypes';


const initialState = {
    count : 0
}

const countReducer = (state = initialState , action) => {

    switch (action.type) {

        case INCREMENT:
            return {
                count: state.count + action.payload
            }
            
        case DECREMENT:
            return {
                count: state.count - action.payload
            }
        
        case RESET:
            return {
                count: 0
            }
    
        default:
            return state
    }
}

export default countReducer;