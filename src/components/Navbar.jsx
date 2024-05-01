import React, {useContext} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Navbar = ({accessToken, setAccessToken}) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
        navigate("");
    }

    return (
        <>              
            <nav className=''>
                <div className=''>
                    <NavLink to=""  style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Home</NavLink>
                    {accessToken ? "" : <NavLink to="/register" style={({ isActive }) => {return isActive ? { color: "red", textDecoration: "underline" } : {}; }}>Register</NavLink>}
                    {accessToken ? <button onClick={logout}>Logout</button> : ""}
                </div>
            </nav>
        </>
    );
};


export default Navbar