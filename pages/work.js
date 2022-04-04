import React from 'react'
import axios from "axios"
import { useState } from 'react'
import styles from '../styles/Work.module.css'
import Wrk from './Wrk'



function workApi({Data}) {
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [gender,setgender]=useState("")

  const handle= async ()=>{
  console.log({username,email,password,gender})
  const newuser={
    username,
    email,
    password,
    gender
  }
  await axios.post("https://forbae-practice.herokuapp.com/user/create",newuser);
  }
  

  return (
    <div className={styles.styl}>
    <Wrk Data={Data}/>
     <input onChange={(e)=>{setusername(e.target.value)}} value={username} type='text' name='name'/><br/><br/><br/>
    <input onChange={(e)=>{setemail(e.target.value)}} value={email} type='text' name='email'/><br/><br/><br/>
    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type='text' name='password'/><br/><br/><br/>
    <input onChange={(e)=>{setgender(e.target.value)}} value={gender} type='text' name='gender'/><br/><br/><br/>
    <button type='button' onClick={handle}>sumit</button>
  
    </div>
  )
}
export const getServerSideProps =async ()=>{
    const res=await axios.get("https://forbae-practice.herokuapp.com/user/all");
    return{
        props:{
            Data:res.data,
        }
    }
}

export default workApi
