import React from 'react'
import './Signup.css'

function Signup({user,setUser,setLogin,login}) {



  return (
    <div className='signup'>
        <form action="">
            <label htmlFor="">Name</label> <br />
            <input onChange={(e)=>setUser((prev)=>({...user,name:e.target.value}))} value={user.name} type="text" name="" id="" placeholder='username' /> <br />

            <label htmlFor="">E-mail</label> <br />
            <input onChange={(e)=>setUser((prev)=>({...user,email:e.target.value}))} value={user.email} type="email" name="" id="" placeholder='someone@something.com' /> <br />

            <label htmlFor="">Password</label> <br />
            <input onChange={(e)=>setUser((prev)=>({...user,password:e.target.value}))} value={user.password} type="password" name="" id="" placeholder='*********' />
        </form>
        <button onClick={()=>{
            setUser((prev)=>({...user,signup:false}));
            setLogin((prev)=>(!login))
        }} type="button">sign up</button>
      
    </div>
  )
}

export default Signup