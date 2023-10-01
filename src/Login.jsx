import React, { useState } from 'react'
import './Signup.css'

function Login({user,setLogin,login,welcome,setWelcome}) {

    const [cred,setCred]= useState({
        email:'',
        password:''
    })
    const [msg,setMsg]=useState(false)

  return (
    <div className='signup border-2 p-8 rounded-lg text-2xl'>
        <form action="">
            <label htmlFor="">E-mail</label> <br />
            <input className='my-3 p-2 text-xl w-96 outline-none text-black' onChange={(e)=>setCred((prev)=>({...cred,email:e.target.value}))} type="email" name="" id="" placeholder='someone@something.com' /> <br />
            <label htmlFor="">Password</label> <br />
            <input className='my-3 p-2 text-xl w-96 outline-none text-black' onChange={(e)=>setCred((prev)=>({...cred,password:e.target.value}))} type="password" name="" id=""  placeholder='*********' />
        </form>
        <button className='block mx-auto text-xl py-1 px-2 outline-none border-2 mt-7 rounded-md' onClick={(e)=>{
            if(cred.email===user.email && cred.password===user.password){
                setWelcome((prev)=>(!prev))
                setLogin((prev)=>(!prev))
            }else{
                setMsg((prev)=>(!prev))
            }
        }} type="button">login</button>
        {msg && <h1 className='text-center py-3 text-2xl'>Mismatching credentials‼️🙁</h1>}
    </div>
  )
}
 
export default Login