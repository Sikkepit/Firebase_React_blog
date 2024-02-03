import React, { useEffect } from 'react'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db,auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

export default function CreatePost({isAuth}) {

const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const navigate = useNavigate();

const postColletionRef = collection(db, "posts")

function updateTitle(event) {
  setTitle(event.target.value)
}

function updateContent(event) {
  setContent(event.target.value)
}

async function createPost() {
  // reference to the table/collection
  await addDoc(postColletionRef, {
    title: title,
    content: content,
    author: {
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,
    }
  })
  navigate("/")

}

useEffect(() => {
  if(!isAuth) {
    navigate("/login")
  }
},[])

  return (
    <div>
      {isAuth &&
      <div>
      <h1>Create Post</h1>
      <div className="input-group">
        <label htmlFor="post-title">Title</label>
        <input type='text' name="post-title" onChange={updateTitle}></input>
      </div>
      <div className="input-group">
        <label htmlFor="post-content">Content</label>
        <textarea name="post-content" id="create-post--content-input" onChange={updateContent} cols="30" rows="10"></textarea>
      </div>
      <button  onClick={createPost}>Submit Post</button>
    </div>
    }
    </div>
  )
}