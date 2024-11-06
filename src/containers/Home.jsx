import { useEffect, useState } from 'react'
import { Hero } from '../components/Hero'
import logo from './../assets/logo-w.png'
import { Alert } from './Alert'
import avatar from '../assets/avatar.png'
import { Forum } from './Forum'
import home from '../assets/home.png'
import forum from '../assets/chat.png'
import danger from '../assets/danger.png'
import map from '../assets/map.png'
import { Projects } from './Projects'
import { Navigate, useNavigate } from 'react-router-dom'

export const Home = ({isLogin}) => {
    const [currentActive, setCurrentActive] = useState(0)
  const [user] = useState(JSON.parse(localStorage.getItem('profile')))
  const navigate= useNavigate

    useEffect(() => {
        
      return () => {
      }
    }, [currentActive,isLogin])
    return (
        <div className="h-screen w-screen bg-login-bg flex bg-no-repeat bg-cover">
            <div className="sidebar min-h-screen min-w-80 bg-sidebar-bg/50 backdrop:blur-lg relative rounded-r-2xl">
                <div className='flex items-center px-4'>
                    <img src={logo} alt="" className='w-20' />
                    <h1 className='text-white text-2xl font-bold mr-4'>AquaVerse</h1>
                </div>
                <div className=" mt-20 px-10 text-2xl cursor-pointer text-white tracking-widest flex flex-col items-start justify-start">
                    <button className='mb-3 flex w-full pr-2  hover:underline underline-offset-4  transition ease-in-out duration-500 delay-1000' onClick={()=>{setCurrentActive(0)}}>
                        <img src={home} className='h-6 mr-4'></img>
                        home
                    </button>
                    <button className='mb-3 flex w-full pr-2 hover:underline underline-offset-4 ' onClick={()=>{setCurrentActive(1)}}>
                    <img src={forum} className='h-6 mr-4 mt-0.5'></img>
                    forum</button>
                    <button className='mb-3 flex w-full pr-2 hover:underline underline-offset-4' onClick={()=>{setCurrentActive(2)}}>
                    <img src={danger} className='h-6 mr-4 mt-0.5'></img>
                    alerts</button>
                    <button className='mb-3 flex w-full pr-2 hover:underline underline-offset-4' onClick={()=>{setCurrentActive(3)}}>
                    <img src={map} className='h-6 mr-4 mt-1.5'></img>
                    projects</button>
                </div>
                <div className="absolute text-white bottom-8 w-full px-8">
                    <div className=' bg-white w-full flex  rounded-full px-4 py-2 text-darker-blue items-center '>
                        <img src={avatar} className='h-10 rounded-full w-10 bg-black mr-4'></img>
                        <h1>Hi, {`${user?.result?.name}`}!</h1>
                    </div>
                </div>
            </div>
            <div className="main backdrop:blur-md bg-darkest-blue/50 w-full ">
                {(currentActive === 0 && <Hero />) || (currentActive===2 && <Alert/> ) || (currentActive==1 && <Forum isLogin={isLogin}/>) || (currentActive==3 && <Projects/>)}
            </div>
        </div>
        
    )
}