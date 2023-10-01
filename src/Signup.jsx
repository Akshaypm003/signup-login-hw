import React from 'react'
import './Signup.css'

function Signup({user,setUser,setLogin,login}) {



  return (
    <div className='signup border-2 border-teal-200 p-8 rounded-lg text-2xl'>
        <form action="">
            <label htmlFor="">Name</label> <br />
            <input className='text-black my-3 p-2 text-xl w-96 outline-none' onChange={(e)=>setUser((prev)=>({...user,name:e.target.value}))} value={user.name} type="text" name="" id="" placeholder='username' /> <br />

            <label htmlFor="">E-mail</label> <br />
            <input className='text-black my-3 p-2 text-xl w-96 outline-none' onChange={(e)=>setUser((prev)=>({...user,email:e.target.value}))} value={user.email} type="email" name="" id="" placeholder='someone@something.com' /> <br />

            <label htmlFor="">Password</label> <br />
            <input className='text-black my-3 p-2 text-xl w-96 outline-none' onChange={(e)=>setUser((prev)=>({...user,password:e.target.value}))} value={user.password} type="password" name="" id="" placeholder='*********' />
        </form>
        <button className='block mx-auto text-xl py-1 px-2 outline-none border-2 mt-7 rounded-md' onClick={()=>{
            setUser((prev)=>({...user,signup:false}));
            setLogin((prev)=>(!login))
        }} type="button">sign up</button>
      
    </div>
  )
}

export default Signup