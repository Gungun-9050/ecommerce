import React, { useState } from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {

  const [state, setState] = useState('Login')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})      
  }

  
  const Signup = async ()=> {
      console.log("Signup function exicuted",formData);
      let responseData;
      await fetch('http://localhost:8080/signup',{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res)=> res.json()).then((data)=> responseData=data)

      if(responseData.success){
        console.log(formData);
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace('/');
      }else{
        alert(responseData.errors)
      }
      
  }
 
  const Login = async ()=> {
      // console.log("Login function exicuted",formData);
      let responseData;
      await fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then((res)=> res.json()).then((data)=> responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace('/');
      }else{
        alert(responseData.errors)
      }
      
  }
 
  return (
    <div className='SignUp'>
      <div className="SignUpCard">
        <h2>{state}</h2>
        <div className="SignUpInputs">
          {state==="Signup"? <input type="text" name='name' value={formData.name} onChange={changeHandler} placeholder='Your Name' />:<></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
          <button onClick={() => {state==='Login'?Login():Signup()}}>Continue</button>
        </div>
        {state==="Login"?<p>Create a new Account <span onClick={() => {setState('Signup')}}>Click here</span></p>:
        <p>Already have an account? <span onClick={() => {setState('Login')}}>Login here</span></p>}
        <div className="SignUpTerms">
          <input type="checkbox"/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp