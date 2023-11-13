import React from 'react'

const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault()
    }
  return (
    <div className='flex items-center justify-center'>
        <form onSubmit={handleLogin}>
            <input type='text' placeholder='enter your registeredmobile or email' />
            <input type='text' placeholder='enter your password' />
            <button className=''>Login</button>
        </form>
    </div>
  )
}

export default Login
