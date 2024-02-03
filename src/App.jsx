import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import ShowPost from './pages/ShowPost'
import EditPost from './pages/EditPost'
import NavBar from './components/NavBar'

export default function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  

  return (
    <>
    <BrowserRouter>
    <NavBar setIsAuth={setIsAuth} isAuth={isAuth}/>
     <Routes>
      <Route index element={<Home isAuth={isAuth} />} />
      <Route path="/create" element={<CreatePost isAuth={isAuth}/>} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/post/:id' element={<ShowPost />} />
      <Route path='/post/:id' element={<EditPost />} />
     </Routes>
    </BrowserRouter>

    </>
  )
}

