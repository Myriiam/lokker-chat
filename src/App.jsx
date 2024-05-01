import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <>
      <Outlet />
      <div>This is the place of the footer</div> 
    </>
  )
}

export default App
