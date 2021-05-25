import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFail } from '../actions/usersActions';
import Card from './Card';



function UserComp() {

    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.usersState)



    useEffect(() => {

        dispatch(fetchUsersRequest());

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log('data :', res.data)
                dispatch(fetchUsersSuccess(res.data))
            })
            .catch(err => {
                // console.log(err.message)
                dispatch(fetchUsersFail(err.message))
            })
        
    }, [dispatch])



    return (
        <div>
            { 
                error ? <div className="error">Error...!, {error} </div> :
                loading ? <div className="loading">Loading....</div> :
                        users.map((item) => <Card key={item.id} {...item} /> )
            }
        </div>
    )
}

export default UserComp
