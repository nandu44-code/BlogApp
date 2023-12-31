import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/createPost';
import Login from './pages/login';

function App() {

  return (
   <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/createpost'>create post</Link>
      <Link to='/login'>Login</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
   </Router>
      )
  }
export default App
