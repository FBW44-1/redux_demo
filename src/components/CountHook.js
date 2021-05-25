import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, reset} from '../actions/countActions'



function CountHook() {

    const dispatch = useDispatch();
    const {count} = useSelector(state => state.countState);
    // console.log('count :', count);



    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch(increment(5))}>Increment</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default CountHook
