import React from 'react'
//import axios from 'axios'
import {useState} from 'react'
import { useRouter } from 'next/router'

function Register() {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const router  = useRouter()


    const userSignup = async(e)=>{
      e.preventDefault()
      const res =   await fetch("http://simple-social-ark.herokuapp.com/users",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })
  
      const res2 = await res.json()
        router.push('/Profile')
        console.log(res2)
      
    }
    /*const handle= async ()=>{
      console.log({email,password})
      const newuser={
        email,
        password
      }
      await axios.post("http://simple-social-ark.herokuapp.com/users/",newuser);
      }*/
      
  return (
    <div>
      <form >
      <label >Email:</label><br/>
      <input onChange={(e)=>{setemail(e.target.value)}} value={email} type='text' name='email'/><br/><br/><br/>
    <label>Password:</label><br/>
    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type='text' name='password'/><br/><br/><br/>
    <button type='button' onClick={(e)=>userSignup(e)}  >sumit</button>
      </form>
    
    </div>
  )

}
export default Register
