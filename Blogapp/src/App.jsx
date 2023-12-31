import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/createPost';
import Login from './pages/login';
import { signOut } from 'firebase/auth';
import {auth} from './firebaseConfig'
function App() {

  const [isAuth, setIsAuth] = useState(false)
  const userSignOUt = () =>{
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
      console.log(isAuth)
    })
  }

  return (
   <Router>
    <nav>
      <blog className='blog'>BLOG APP</blog>
      
        <Link className='nav-item' to='/'>
        <nav-items>
          Home
        </nav-items>
          </Link>

      
        <Link className='nav-item' to='/createpost'>
        <nav-items>
          Post
          </nav-items>
          </Link>

      
            {isAuth ? (
    <Link className='nav-item' onClick={userSignOUt}>
      <nav-items> Logout </nav-items>
    </Link>
  ) : (
    <Link className='nav-item' to='/login'>
      <nav-items> Login </nav-items>
    </Link>
  )}


    

      
    
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>

    </Routes>
   </Router>
      )
  }
export default App
