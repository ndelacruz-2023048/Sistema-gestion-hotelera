import React from 'react'
import { NavLink, Outlet } from 'react-router'

export const SettingsPage = () => {
  return (
    <div>
        <NavLink to="/settings/hotel">
            <button>Hotels</button>
        </NavLink>
        <Outlet/>
    </div>
  )
}
