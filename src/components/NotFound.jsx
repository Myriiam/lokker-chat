import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
    return (
        <>
            <div className=''>
                <h1 className=''>ERROR 404 - Page Not Found</h1>
                <button className=''>
                    <Link to="/">Back to the HomePage</Link>
                </button>
            </div>
        </>
    );
};

export default NotFound