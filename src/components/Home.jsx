import React, { useState, useContext } from 'react'
import LoginForm from './LoginForm';
import TokenContext from './context/TokenContext';
/* import FetchData from './FetchData.jsx' */


const Home = ({accessToken, setAccessToken, user, setUser, username, setUsername}) => {

    return (
        <>
            <h1>Welcome to the Lokker Room</h1>
            {accessToken ? 
             "" 
            : <LoginForm setAccessToken={setAccessToken} user={user} setUser={setUser} username={username} setUsername={setUsername} />}
        </>
    );
};


export default Home