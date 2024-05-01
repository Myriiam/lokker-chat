import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";


const DataContextProvider = ({children, accessToken}) => {
    const [dataApi, setDataApi] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
           Authorization: `Bearer ${accessToken}`
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            try {
                const URL = "https://lokker-room-3ce86819d936.herokuapp.com/api/users";
                const response = await fetch(URL, options);
                const data = await response.json();
                console.log(data);
              //  setDataApi(data);
            } catch (err) {
                console.log("Error in fetching user data", err);
            }
        }

        getUsers();

    }, [accessToken]);

    return (
        <>
            <DataContext.Provider value={{dataApi, setDataApi}}>
                {children}
            </DataContext.Provider>
        </>
     );
    
}


export default DataContextProvider