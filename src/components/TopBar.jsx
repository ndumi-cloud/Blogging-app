/* eslint-disable no-unused-vars */
import React from 'react'
import '../topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'></div>
        {/* add icons classname topIcon*/}
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>

            </ul>
        </div>
        <div className='topRight'>
            {/* search icon classname topSearchIcon */}
        </div>

    </div>
  )
}
