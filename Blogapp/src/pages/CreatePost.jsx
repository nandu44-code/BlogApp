import React from 'react';
import  './CreatePost.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'


function CreatePost() {
  return (
    <div className='parent-div'>
      <div className='create-post'>
      <h4>Create a new post<span className='icon'><FontAwesomeIcon icon={ faFolderPlus } /></span></h4>

      </div>
    </div>
  )
}

export default CreatePost
