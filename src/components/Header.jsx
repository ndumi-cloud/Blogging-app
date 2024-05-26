/* eslint-disable no-unused-vars */
import React from 'react'
import './header.css'

export default function Header() {
  return (
    <>
    <div className='headerTitles'>
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg'
          src="./img/sunrise.jpg"
          alt='' />
    </>
  )
}