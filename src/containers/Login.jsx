import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { signup, signin } from './../actions/auth'
import { useNavigate } from 'react-router-dom'
import logo from './../assets/logo.jpeg'

const initialState = { email: '', password: '', confirmPassword: '', firstName: '', lastName: '', role: '' }

const Login = () => {
    const [alrUser, setAlrUser] = useState(true)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const toggleAlrUser = () => {
        setAlrUser(!alrUser)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        console.log(formData)
        if (!alrUser) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))
        }
    };
    return (
        <div className="body min-h-screen min-w-scren flex items-center justify-center bg-login-bg bg-cover bg-no-repeat">
            <div className="modal rounded-lg shadow-lg p-14 backdrop-blur-sm bg-darkest-blue/50 border border-white/80 min-w-[450px]">
            <div className="flex justify-between items-center h-full">
                <h1 className="text-2xl underline text-center  mb-7 text-white/80 my-auto">{alrUser ? "Login to your account" : "Hello, Welcome"}</h1>
                <img src={logo} alt="" className="w-20 bg-lighter-blue/20 border-darkest-blue rounded-full border-2 my-auto"/>
                </div>
                {alrUser ? <div className="mx-3">
                    <div className="my-5 mt-8">
                        <input type="text" onChange={handleChange} placeholder="Email Address" name="email" className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:text-white/50" />
                    </div>
                    <div className="my-5 mt-8">
                        <input type="password" placeholder="Password" onChange={handleChange} name="password" className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:text-white/50" />
                    </div>
                    <div className="flex">
                        <h3 className="text-white/80 mr-2">Not a member?</h3>
                        <span className=" text-cyan-100 font-bold cursor-pointer" onClick={toggleAlrUser}>Join Now</span>
                    </div>
                    <button className="bg-white text-black/80 rounded-lg px-5 py-2 mt-8 w-full font-bold" onClick={handleSubmit}> Continue</button>
                </div> : <div className="mx-3">
                    <div className="flex justify-center">
                        <div className="my-4 mt-4">
                            <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80  outline-none mb-4 placeholder:text-white/50" />
                        </div>
                        <div className="my-4 mt-4">
                            <input type="text" placeholder="Second Name" name="lastName" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80  outline-none mb-4 ml-3 placeholder:text-white/50" />
                        </div>
                    </div>
                   
                    <div className="my-5">
                        <input type="text" placeholder="Email Address" name="email" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:text-white/50" />
                    </div>
                    <div className="my-5 mt-4">
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:white/50" />
                    </div>
                    <div className="my-5">
                        <input type="text" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:text-white/50" />
                    </div>
                    <div className="my-5">
                        <input type="text" placeholder="Role" name="role" onChange={handleChange} className="bg-transparent border-b-2 border-white/60 text-white/80 w-full outline-none mb-4 placeholder:text-white/50" />
                    </div>
                    <div className="flex">
                        <h3 className="text-white/80 mr-2">Already a member?</h3>
                        <span className=" text-cyan-100 font-bold cursor-pointer" onClick={toggleAlrUser}>Login</span>
                    </div>
                    <button className="bg-white text-black/80 rounded-lg px-5 py-2 mt-8 w-full font-bold" type="submit" onClick={handleSubmit}> Continue</button>
                </div>}
            </div>
        </div>
    )
}

export default Login