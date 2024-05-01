import React, { useState, useContext } from 'react'
import LoginForm from './LoginForm';
import TokenContext from './context/TokenContext';
/* import FetchData from './FetchData.jsx' */


const Home = ({accessToken, setAccessToken}) => {

    return (
        <>
            <div>Welcome to the Lokker Room</div>
            {accessToken ? 
             "" 
            : <LoginForm setAccessToken={setAccessToken} />}
        </>
    );
};


export default Home