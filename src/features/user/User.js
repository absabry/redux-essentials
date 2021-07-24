
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addLetter,
    selectUser
} from './userSlice';

export const User = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>
                {user}
            </h2>
            <button onClick={() => dispatch(addLetter())}> Add Letter </button >
        </div >

    );
}