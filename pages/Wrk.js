import React, { useState } from 'react'
import styles from '../styles/Work.module.css'
import axios from 'axios';

function Wrk({Data,task}) {
   const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [gender,setgender]=useState("")
  const [user,setuser]=useState(null)
  const [taskk,setnewtask]=useState({
      username:'',
      email:'',
      password:'',
      gender:'',
  });
  
    const deleteuser=async(id)=>{
      await axios.delete(`https://forbae-practice.herokuapp.com/user/delete/${id}`);
      
    }
    function selectuser(id){
        fetch("https://forbae-practice.herokuapp.com/user/all").then((result)=>{
        result.json().then((resp)=>{
         setusername(resp[0].username)
         setemail(resp[0].email)
         setgender(resp[0].gender)
         setpassword(resp[0].password)
         setuser(resp[0].id)
       console.log(id)
    })
})
    }
    const updateuser=async(id)=>{
        console.log(username,email,password,gender,user)
       await axios.put(`https://forbae-practice.herokuapp.com/user/update/${id}`);
              
    }
    
  return (
    <div>
        {
    Data.map((item)=>
    <div key={item.id} className={styles.flx}>
      <h4 className={styles.hfour}>{item.username}</h4>
      <h4 className={styles.hfour}>{item.password}</h4>
      <h4 className={styles.hfour}>{item.email}</h4>
      <h4 className={styles.hfour}>{item.gender}</h4>
      <button type='button' onClick={()=>deleteuser(item.id)}>DELETE</button>
      <button type='button' onClick={()=>selectuser(item.id)}>UPDATE</button>
    </div>)
   
  }<br/><br/><br/>
  <div style={{textAlign:`center`}}>
  <input onChange={(e)=>{setusername(e.target.value)}}  value={username} type='text' name='name'/><br/><br/><br/>
    <input onChange={(e)=>{setemail(e.target.value)}} value={email} type='text' name='email'/><br/><br/><br/>
    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type='text' name='password'/><br/><br/><br/>
    <input onChange={(e)=>{setgender(e.target.value)}} value={gender} type='text' name='gender'/><br/><br/><br/>
    <button onClick={updateuser}>update user</button>
   
  </div>
    </div>
  )
}
export async function getServerSideProps({query:{id}}){
    const res=await fetch(`https://forbae-practice.herokuapp.com/user/${id}`);
    if (res.status===200){
        const task=await res.json();
        return{
            props:{
                task,
            },
        };
    }
}

export default Wrk
