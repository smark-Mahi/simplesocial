import React, { useRef, useState } from 'react'
import styles from '../styles/Center.module.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Image from 'next/image'
function Votes() {
    const [Dir,setDir]=useState(0)
    const [postid,setpostid]=useState('')
    const [click,setclick]=useState(false)
    //const stylee=false
    //let inputRef=useRef(null)
    //const btnn=document.getElementById('btn');
 function buttn(){
    //inputRef.current.style.color='red'
    setclick(!click)
    setpostid()
    setDir(Dir)
    let data={
        Dir:Dir,
        postid:postid
    }
      var options={
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${sessionStorage.getItem('access_token')}`
        },
        body:JSON.stringify(data)
      }
      fetch(`http://simple-social-ark.herokuapp.com/votes`,options).then(response=>response.json()).then(Arkpotta).
      catch((error)=>{console.log('error',error)});
    
 }
 function Arkpotta(data){
     console.log(data)
 }
 /*function buttn2(){
     inputRef.current.style.color='gray'
 }*/
  return (
    <div>
       <FavoriteIcon style={{position:`relative`,bottom:`70px`,left:`10px`}} className={styles.red} onClick={buttn} />
    <div style={{position:`relative`,bottom:`50px`}}>
    {click?<Image src='/heart.png' width='20px' height='20px'/>:<Image  src='/broken.png' width='20px' height='2opx'/>}
    {click?<span>{Dir+1}</span>:<span>{Dir+1-1}</span>}    
    </div>
        
    </div>
  )
}

export default Votes
