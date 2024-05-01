import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = ({ accessToken, setAccessToken }) => {
    console.log(accessToken);
    const localToken = localStorage.getItem('accessToken');
    console.log(localToken);
    setAccessToken(localToken);
   
    if (localToken === accessToken) {
        console.log("It is true !")
    } else {
        console.log("Not equal")
    }

    return(
        localToken ? <Navigate to="/chat"/> : <Navigate to="/register"/>
    )
}

export default PrivateRoutes