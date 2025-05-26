import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/userSlice'
import "./login.css"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signUp, setSignUp] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state)

    const handleLogin = async (e) => {
        e.preventDefault()
        if( e.target[0].value === '' || e.target[1].value === '') {
            toast.warn('Please fill all the fields !')
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URI}/api/v1/auth/login`, {
                email: e.target[0].value,
                password: e.target[1].value
            })
            // console.log(response.status)
            if (response.status === 200) toast.success('Login successfull !')
                dispatch(login(response.data))
            // navigate('/')
        } catch (err) {
            console.log(err)
            console.log((err.response.status))
            if (err.response.status === 404) {
                toast.error('user not found ! !')
            }else if(err.response.status === 400){
                toast.error('invalid password !')
            }else{
                toast.error('Something went wrong, please try again later !')
            }
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()
        alert("signup")
    }
    return (
        <div className='flex items-center justify-center md:bg-[black]'>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className='form-left'>
                sadas
            </div>
            {
                signUp ?
                    <form onSubmit={handleRegister} className='flex flex-col flex-1 py-5 gap-4 h-screen border items-start px-10 justify-center bg-[black]'>
                        <h1 className='text-2xl md:text-4xl text-[white]'>LOG IN / SIGN-UP</h1>
                        <p className='md:text-xl text-[grey] text-start'>For the newest trends, enticing promotions, and more FAVOUSER</p>
                        <input type='text' required placeholder='enter your registeredmobile or email' className='border outline-none py-2 w-fit px-5 justify-self-center md:w-96 rounded-md' />

                        <input type='text' required placeholder='enter your password' className='border outline-none py-2 w-fit px-5 justify-self-center md:w-96 rounded-md' />
                        <button className='border text-[lightgrey] px-5 py-2 rounded-md '>SIGN UP</button>
                        <p className='flex text-[grey] items-center gap-2'>Already registered ? <span className='text-white cursor-pointer' onClick={() => setSignUp(false)}>LOGIN</span></p>
                        <Link className='text-[lightgrey] underline text-sm' to={'/'}>Return to homepage</Link>

                    </form>
                    :
                    <form onSubmit={handleLogin} className='flex flex-col flex-1 py-5 gap-4 h-screen border items-start px-10 justify-center bg-[black]'>
                        <h1 className='text-2xl md:text-4xl text-[white]'>LOG IN / SIGN-UP</h1>
                        <p className='md:text-xl text-[grey] text-start'>For the newest trends, enticing promotions, and more FAVOUSER</p>
                        <input required type='text' placeholder='enter your email or mob.' className='border outline-none py-2 w-fit px-5 justify-self-center md:w-96 rounded-md' />
                        <input required type='text' placeholder='enter your password' className='border outline-none py-2 w-fit px-5 justify-self-center md:w-96 rounded-md' />
                        <button className='border text-[lightgrey] px-5 py-2 rounded-md '>LOGIN</button>
                        <button className='border border-[pink] text-[PURPLE] px-5 py-2 rounded-md'>GOOGLE LOGIN</button>
                        <p className='flex text-[grey] items-center gap-2'>not registered ? <span className='text-white cursor-pointer' onClick={() => setSignUp(true)}>SIGN UP</span></p>
                        <Link className='text-[lightgrey] underline text-sm' to={'/'}>Return to Homepage</Link>
                    </form>
            }
        </div>
    )
}

export default Login
