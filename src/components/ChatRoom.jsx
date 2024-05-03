import React, { useContext, useEffect, useState }  from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import DataContext from './context/DataContext'
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useForm } from "react-hook-form"
import { IoSend } from "react-icons/io5";


const ChatRoom = ({ accessToken, setAccessToken, user, setUser, username, setUsername }) => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    const [dataApi, setDataApi] = useState([]); //get users from the same lobby
    const [messagesApi, setMessagesApi] = useState([]);
    const userId = localStorage.getItem("userId");
   // console.log(userId);

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            try {
                const URL = "https://lokker-room-3ce86819d936.herokuapp.com/api/users";
                const response = await fetch(URL, options);

                // Check if the request was successful
                if (response.ok) {
                    console.log(`${response.status} ${response.statusText}`);
                }

                const responseData = await response.text();
                console.log(responseData);
                const data = JSON.parse(responseData);
                console.log(data);
                setDataApi(data);
                getMessages(data[0].lobby_id);
                postMessages(data[0].lobby_id);
            } catch (err) {
                console.log("Error in fetching user data", err);
            }
        }

        const getMessages = async (lobbyId) => {
            try {
                const URL = `https://lokker-room-3ce86819d936.herokuapp.com/api/lobby/${lobbyId}`;
                const response = await fetch(URL, options);
               // console.log(dataApi.length());

                // Check if the request was successful
                if (response.ok) {
                    console.log(`${response.status} ${response.statusText}`);
                }

                const responseData = await response.text();
                const data = JSON.parse(responseData);
                console.log(data);
                setMessagesApi(data);
            } catch (err) {
                console.log("Error in fetching user data", err);
            }
        } 

        getUsers();
        // if (dataApi.length > 0) {
            // Call getMessages with the lobby_id from dataApi
        // }
    }, [accessToken]); 

    const postMessages = async (data) => {
        try {
            const response = await fetch(`https://lokker-room-3ce86819d936.herokuapp.com/api/lobby/${dataApi[0].lobby_id}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
            });
            
            console.log(response);
            if (response.ok) {
                const  messageSent  = await response.json();
                console.log(messageSent);
                console.log(data);
                console.log(messagesApi);
                
                setMessagesApi([...messagesApi, data]);
                console.log(messagesApi);
                reset();
            } else {
                const { error } = await response.json();
            }
        } catch (error) {
            console.error('Error while posting a message :', error);
        }
    }

    return (
        <>  
            <div className='container'>
                 <div className='main'>
                    <div className='menu-side'>
                        <Link to="#" className='menu-profile'><CgProfile className='m-profile' /></Link>   
                        <Link to="#"> <AiOutlineMessage className='m-message' /></Link>   
                        <Link to="#"> <FaRegUser className='m-user' /></Link>   
                    </div>
                    <div className='users-side'>
                        <h3>Users In My Lobby</h3>
                      { dataApi.length > 0 ? ( 
                        <>
                            <h4> Team {dataApi[0].lobby_id}</h4>
                            {dataApi.map((userInfo, index) => ( 
                                <p className='user-name' key={index}>{userInfo.lobby_id} {userInfo.nickname}</p>
                            ))}
                        </>
                        ) : (
                            <>
                                <p>No members in this lobby at the moment</p>
                            </>
                        )
                      }
                    </div>
                    <div className='messages-side'>
                        <div className='all-messages'>
                            {messagesApi.length > 0 ? (
                                messagesApi.map((message, index) => ( 
                                    message.user == userId ? (
                                        <p className='msg-content' style={{ border: '2px solid #76589a', backgroundColor: '#ba9cba' }} key={index}>{message.content}</p>
                                    ) : (
                                            <>  
                                                <p>{message.username} : </p>
                                                <p className='msg-content' key={index}>{message.content}</p>
                                            </>
                                    )
                                ))
                                ) : (
                                    <p>No messages in this lobby at the moment !</p>
                                )   
                            }
                        </div>
                        <form className="message-container" onSubmit={handleSubmit(postMessages)}>
                            <input {...register("content", { required: true })} className='input-message' name="content" type='text' placeholder='Your message here ...'/>
                            <button className='submit-msg' disabled={isSubmitting} type='submit'>
                                {isSubmitting ? "Loading..." : <IoSend className='cursor-msg'/>}
                            </button>
                        </form>
                    </div>
                 </div>
            </div>
        </>
    );
};


export default ChatRoom