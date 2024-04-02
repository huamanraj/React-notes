import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
    const {userid} = useParams();

    return (
        <div className='bg-gray-300 p-5 '>
            user : {userid}
        </div>
    );
}

export default User;
