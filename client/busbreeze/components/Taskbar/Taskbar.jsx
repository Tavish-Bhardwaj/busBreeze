import React from 'react'
import "./Taskbar.css"
import { Link, NavLink } from 'react-router-dom';
const Taskbar = () => {

    const navItems = [
        { path: "/", title: "Reservations" },
        { path: "/add-route", title: "Add a Route" },
        { path: "/update-route", title: "Update a Route" },
      ];
  return (
    <div className='task-container'>
    <NavLink to ="/" className="color-white">Reservation</NavLink>
    <NavLink to ="add-route" className="color-white">Add Route</NavLink>
    <NavLink to ="update-route" className="color-white">Update Route</NavLink>
      
    </div>
  )
}

export default Taskbar
