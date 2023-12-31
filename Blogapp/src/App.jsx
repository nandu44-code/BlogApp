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
      <Link className='nav-item' to='/'>Home</Link>
      <Link className='nav-item' to='/createpost'>Post</Link>
      <Link className='nav-item' to='/login'>Login</Link>
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
