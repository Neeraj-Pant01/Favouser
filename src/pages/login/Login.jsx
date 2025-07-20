import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/userSlice'
import './login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import RouteChangeTracker from '../../components/RouteChangeTracker'

const AuthPage = () => {
  const [signUp, setSignUp] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    if (!email || !password) return toast.warn('Please fill all fields!')

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_URI}/api/v1/auth/login`,
        { email, password }
      )
      if (res.status === 200) {
        toast.success('Login successful!')
        dispatch(login(res.data))
        navigate('/')
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed!')
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    const username = e.target[0].value
    const mobile = e.target[1].value
    const email = e.target[2].value
    const password = e.target[3].value
    const city = e.target[4].value
    const pincode = e.target[5].value

    if (!username || !email || !password || !city || !pincode || !mobile)
      return toast.warn('Please fill all fields!')

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_URI}/api/v1/auth/register`,
        { username, mobile, email, password, city, pincode }
      )
      if (res.status === 200) {
        toast.success('Signup successful! You can now log in.')
        setSignUp(false)
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed!')
    }
  }

  return (
    <>
      <div
        className="flex md:bg-[url(/assets/LoginBG.png)] bg-[url(/flb.png)] min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `` }}
      >
        <ToastContainer theme="colored" />

        {/* Left Brand Panel */}
        <div className="w-[25%] hidden md:flex bg-white/80 backdrop-blur-sm flex-col justify-center items-center text-black font-bold text-5xl tracking-widest">
          {/* {['F', 'A', 'V', <span key="o" className="text-6xl">👕</span>, 'U', 'S', 'E', 'R'].map((char, i) => (
          <span key={i} className="py-1">{char}</span>
        ))} */}
          <img src="/flb.png" className='transform h-[98%] opacity-70' alt="" />
        </div>

        {/* Form Panel */}
        <div className="w-[100%] md:w-[75%] bg-[#08373a]/90 flex items-center justify-center text-white">
          <form
            onSubmit={signUp ? handleSignup : handleLogin}
            className="flex flex-col bg-transparent gap-4 w-full max-w-md px-8"
          >
            <h2 className="text-3xl font-bold text-center">
              {signUp ? 'SIGN UP' : 'LOGIN'}
            </h2>

            {signUp && (
              <>
                {/* <label className="text-lg">Username</label> */}
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="bg-white text-black rounded-md px-4 py-2 outline-none"
                />
                {/* <label className="text-lg mt-5">Mobile</label> */}
                <input
                  type="string"
                  maxLength={10}
                  placeholder="Enter your mobile number !"
                  className="bg-white text-black rounded-md px-4 py-2 outline-none"
                />
              </>
            )}

            {/* <label className="text-lg mt-5">Email</label> */}
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black rounded-md px-4 py-2 outline-none"
            />

            {/* <label className="text-lg mt-5">Password</label> */}
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white text-black rounded-md px-4 py-2 outline-none"
            />

            {signUp && (
              <>
                {/* <label className="text-lg mt-5">City</label> */}
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="bg-white text-black rounded-md px-4 py-2 outline-none"
                />
                {/* <label className="text-lg mt-5">Pincode</label> */}
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  className="bg-white text-black rounded-md px-4 py-2 outline-none"
                />
              </>
            )}

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#d3cabf] px-10 md:text-[16px] w-max mt-5 text-black font-semibold py-2 rounded-md"
              >
                {signUp ? 'Register' : 'Submit'}
              </button>
            </div>

            <p className="text-center text-sm mt-2">
              {signUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                className="underline text-white"
                onClick={() => setSignUp((prev) => !prev)}
              >
                {signUp ? 'Login here' : 'Register here'}
              </button>
            </p>
            <Link to={'/'} className="text-center underline text-sm mt-2">
              Continue Homepage
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthPage
