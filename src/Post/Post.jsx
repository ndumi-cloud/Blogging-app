/* eslint-disable no-unused-vars */
import React from 'react'
import './Post.css'
export default function Post() {
  return (
    <div className='post'>
       <img className='postImg'
       src='../images/Laptop.jpg'
       alt=''
       />
       <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
       </div>
       <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis minima at qui error eligendi expedita, eius cupiditate laborum? Nihil tempora recusandae sequi laudantium ex doloribus dignissimos assumenda, esse omnis?</p>
       <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt necessitatibus temporibus debitis velit unde nam, error accusamus iure perferendis totam autem nisi inventore voluptatum, natus suscipit. Asperiores quisquam quidem voluptates.</p>
       
    </div>
  )
}
