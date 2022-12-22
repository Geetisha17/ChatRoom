import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className='logo'>ChatRoom</span>
        <span className='title'>Register</span>
        <form action="">
            {/* <input type="text" placeholder='display name' /> */}
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button>Sign In</button>
        </form>
        <p>You don't have an account? Sign Up</p>
      </div>
    </div>
  )
}

export default Login


