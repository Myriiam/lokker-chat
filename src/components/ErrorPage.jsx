import React from 'react'
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    return (
       <div className=''>
           <h1>! Error !</h1>
           <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage