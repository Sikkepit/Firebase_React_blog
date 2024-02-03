import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { auth, db } from '../firebase-config'

export default function Home({isAuth}) {
  const [postList, setPostList] = useState([])
  const postColletionRef = collection(db, "posts")

  async function getPosts() {

    return onSnapshot(postColletionRef, (data) => {
      setPostList(data.docs.map(doc => (
        { 
          ...doc.data(), 
          id: doc.id 
        })))
    })
  }
  async function deletePost(id) {
    const postDoc = doc(db, "posts", id)
    await deleteDoc(postDoc)
  }

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <div>
      <h1>All Posts</h1>
      {postList.map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h3>@{post.author.name}</h3>
            <div>{post.content}</div>
            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => deletePost(post.id)}>Delete</button> }
          </div>
        )
      })}
    </div>
  )
}