import React, { useContext, useEffect, useState }  from 'react'
import DataContext from './context/DataContext'
import PrivateRoutes from './PrivateRoutes'


const ChatRoom = ({ accessToken, setAccessToken }) => {

  //  const {dataApi} = useContext(DataContext);
  const [dataApi, setDataApi] = useState([]);

  const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${accessToken}`
      }
  }

  useEffect(() => {
    const getUsers = async () => {
        //console.log(options)
        try {
            const URL = "https://lokker-room-3ce86819d936.herokuapp.com/api/users";
            const response = await fetch(URL, options);
           // console.log(response.json())

            // Check if the request was successful
            if (response.ok) {
                console.log(`${response.status} ${response.statusText}`);
            }

            const responseData = await response.text();
            console.log(responseData);
            const data = JSON.parse(responseData);
            console.log(data);
            setDataApi(data);
        } catch (err) {
            console.log("Error in fetching user data", err);
        }
    }

    getUsers();

}, [accessToken]); 

    return (
        <>  
            <div>
                <h1>This is the Chat Room !!!</h1>
                 {dataApi.map((userInfo, index) => ( 
                   <p key={index}>{userInfo.nickname}</p>
                 ))} 
            </div>
        </>
    );
};


export default ChatRoom