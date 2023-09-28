import React, { useState } from 'react'
import './Signup.css'

function Login({user,setLogin,login,welcome,setWelcome}) {

    const [cred,setCred]= useState({
        email:'',
        password:''
    })
    const [msg,setMsg]=useState(false)

  return (
    <div className='signup'>
        <form action="">
            <label htmlFor="">E-mail</label> <br />
            <input onChange={(e)=>setCred((prev)=>({...cred,email:e.target.value}))} type="email" name="" id="" placeholder='someone@something.com' /> <br />
            <label htmlFor="">Password</label> <br />
            <input onChange={(e)=>setCred((prev)=>({...cred,password:e.target.value}))} type="password" name="" id=""  placeholder='*********' />
        </form>
        <button onClick={(e)=>{
            if(cred.email===user.email && cred.password===user.password){
                setWelcome((prev)=>(!prev))
                setLogin((prev)=>(!prev))
            }else{
                setMsg((prev)=>(!prev))
            }
        }} type="button">login</button>
        {msg && <h1>Mismatching credentials‼️🙁</h1>}
    </div>
  )
}
 
export default Login