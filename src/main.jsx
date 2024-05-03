import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Link, RouterProvider, Outlet } from "react-router-dom"
import ErrorPage from './components/ErrorPage.jsx'
import NotFound from './components/NotFound.jsx'
import Home from './components/Home.jsx'
import LoginForm from './components/LoginForm.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import ChatRoom from './components/ChatRoom.jsx'
import PrivateRoutes from './components/PrivateRoutes'
import Navbar from './components/Navbar.jsx'


const Root = () => {

  const [accessToken, setAccessToken] = useState(null);  //token
  const [user, setUser] = useState(null); //id of logged in user
  const [username, setUsername] = useState(null); //nickname of logged in user
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar accessToken={accessToken} setAccessToken={setAccessToken} user={user} setUser={setUser} username={username} setUsername={setUsername}/>
          <App />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <>
              <Home accessToken={accessToken} setAccessToken={setAccessToken} user={user} setUser={setUser} username={username} setUsername={setUsername} />
            </>
          ),
        },
        {
          path: "chat",
          element: (
            <>
              <PrivateRoutes accessToken={accessToken} setAccessToken={setAccessToken} />
              <ChatRoom accessToken={accessToken} setAccessToken={setAccessToken} user={user} setUser={setUser} />
            </>
          )
        },
        {
          path: "register",
          element: (
            <>
              <RegisterForm />
            </>
          )
        },
      ],
      errorElement: <ErrorPage />
    },
  /*  {
      path: "movies/movie/:id",
      element: (
      <Movie />
      )
    }, */
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default Root

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) */
