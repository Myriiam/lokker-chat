import React, {useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Navbar = ({accessToken, setAccessToken, user, setUser, username, setUsername}) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
        localStorage.removeItem("userId");
        setUser(null);
        localStorage.removeItem("username");
        setUsername(null);
        navigate("");
    }

    return (
        <>              
            <nav className='navigation'>
                <div className='links'>
                    <NavLink to=""  className="link" style={({ isActive }) => {return isActive ? { color: "plum", textDecoration: "underline" } : {}; }}>Home</NavLink>
                    {accessToken ? "" : <NavLink to="/register" className="link" style={({ isActive }) => {return isActive ? { color: "plum", textDecoration: "underline" } : {}; }}>Register</NavLink>}
                    {accessToken ? <NavLink to="/chat" className="link" style={({ isActive }) => {return isActive ? { color: "plum", textDecoration: "underline" } : {}; }}>Chat</NavLink> :""}
                    {accessToken ? <button onClick={logout}>Logout</button> : ""}
                </div>
            </nav>
        </>
    );
};


export default Navbar