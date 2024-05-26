/* eslint-disable no-unused-vars */
import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'></div>
        {/* add icons classname topIcon*/}
        <div className='topCenter'>
            <ul className='topList'>
            <div>
              <div className='img'>
              <a href='https://blogappchatbot.streamlit.app/'>
                <img src="./img/images.png" alt="chatbox"  width="20px" /></a></div>
                </div>
              <li className='topListItem'><a href="/">Home</a></li>
              <li className='topListItem'><a href="/Settings">Settings</a></li>
              <li className='topListItem'><a href="/Register"> Register</a></li>
              <li className='topListItem'><a href="/write">Write</a></li>
              <li className='topListItem'><a href="/Login">Login</a></li>
            </ul>
        </div>
        <div className='topRight'>
            {/* search icon classname topSearchIcon */}
        </div>

    </div>
  )
}