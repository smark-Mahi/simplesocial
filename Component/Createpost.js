import React from 'react'
import { useState } from "react";
import axios from "axios";
import {useRouter} from 'next/router'
//import {Card} from '@material-ui/core'
import Center from '../pages/Center';
import styles from '../styles/Createpost.module.css'
import cookie from 'js-cookie'
function Createpost({setclose}) {
    const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [published, setpublish] = useState("");
  
  const router  = useRouter()
  /*const [close, setclose] = useState(false);
  function post(){
  setclose(true)
  }*/
  /*const handleCreate=async()=>{
    await axios.post("http://simple-social-ark.herokuapp.com/posts",{
      headers:{
        "Authorization": `Bearer ${sessionStorage.getItem('access_token')}`
      }
    });
    
  };*/
  function handleCreate(event){
    event.preventDefault()
    let data={
      title:document.getElementById('title').value,
      content:document.getElementById('content').value,
      published:document.getElementById('publish').value
    }
    var options={
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${sessionStorage.getItem('access_token')}`
      },
      body:JSON.stringify(data)
    }
    fetch(`http://simple-social-ark.herokuapp.com/posts`,options).then(response=>response.json()).then(Arkpotta).
    catch((error)=>{console.log('error',error)});
    router.push('/')
    setclose(true)
   
  }

function Arkpotta(data){
     console.log(data)
}
  return (
    <div className={styles.container}> 
    <div className={styles.wrapper}>
    <span className={styles.close} onClick={()=>setclose(false)} > 
          X
        </span>
       <h3>Create post</h3>
       <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>content</label>
          <input
          id='content'
            type="text"
            onChange={(e) => setcontent(e.target.value)}
          />
        </div>
        <div className={styles.item}>
        <label className={styles.label}>Publish</label>
          <input
          id='publish'
            className={styles.input}
            type="text"
            onChange={(e) => setpublish(e.target.value)}
          />
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
    </div>   
   
    </div>
  )
}

export default Createpost
