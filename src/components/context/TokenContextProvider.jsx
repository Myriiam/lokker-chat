import React, { useState, useEffect } from "react";
import TokenContext from "./TokenContext";

const TokenContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            setAccessToken(storedToken);
        } else {
            localStorage.setItem('accessToken', token);
            setAccessToken(token);
        }
    }, []);

    /* const updateAccessToken = (token) => {
        localStorage.setItem('accessToken', token);
        setAccessToken(token);
    }; */

    return (
        <TokenContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </TokenContext.Provider>
    );
};

export default  TokenContextProvider 