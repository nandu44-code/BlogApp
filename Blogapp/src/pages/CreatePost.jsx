import React from 'react';
import  './CreatePost.css';
// import '../app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'


function CreatePost() {
  return (
    <div className='parent-div'>
      <div className='create-post'>
      <h4>Add a thumnail<span className='icon'><FontAwesomeIcon icon={ faFolderPlus } /></span></h4>
      </div>
      <div className='inputGp'>
            <label>Title :</label>
            <input type='text' placeholder='Enter your title here...'/>
      </div>
      <div>
            
            <textarea placeholder='Enter your content here...'/>
      </div>
    <button className='create-button'>create</button>
    </div>
  )
}

export default CreatePost
