import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

import {Outlet} from 'react-router-dom'


import Navbar from '../components/Navbar/Navbar'

function App() {

  return (
    <>
  
    <div className='backscreen'>
      <Navbar />
      <Outlet />
      
    </div>
      
    </>
  )
}

export default App
