import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css';
import Login from './containers/Login';
import { Home } from './containers/Home';
import { useEffect, useState } from 'react';
// import { SocketContextProvider } from './context/SocketContext';

const App =() => {
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('profile'))){
      setIsLogin(true)
    } else {
    }
  }, [])
  const [isLogin, setIsLogin] = useState(false)

  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/auth' element={<Login/>} />
        <Route exact path='/' element={<Home isLogin={isLogin}/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
