import React from 'react'
import Story from '../Component/Story'
import {Card} from '@material-ui/core'
import {Avatar} from '@material-ui/core'
import styles from '../styles/Center.module.css'
import Mennu from '../Component/Mennu'
//import download from '../public/download (2).jpg'
//import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Votes from '../Component/Votes'
import {useState} from 'react'
import {getSession} from 'next-auth./client'
function Center({data}) {
 // const [dataa,setdata]=useState()
 console.log('hllo')
 console.log(typeof(data))
/*function getdata(){
  var options={
    method:'GET',
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${sessionStorage.getItem('access_token')}`
    }
  }
 fetch(`http://simple-social-ark.herokuapp.com/posts`,options).then(response=>response.json()).then
  (displaydata).catch((error)=>{console.log('error',error)})
//setdata(data)
  
}*/

// function displaydata(data){
//   let postparent=document.getElementById('postparent')
//   for(let i in data){
//     let post=Object.values(data[i])[0]
//     let votes=Object.values(data[i])[1]
//     let owner=Object.values(data[i])[0].owner
// let card=document.createElement('div')
// card.setAttribute('class','card')
// //head
// const head=document.createElement('div')
// const headtext=document.createElement('h6')
// const headtxtnode=document.createTextNode(owner.email)
// headtext.appendChild(headtxtnode)
// head.appendChild(headtext)
// card.setAttribute('class','posthead')//head class
// //body
// const body=document.createElement('div')
// const bodytext=document.createElement('h3')
// const bodytitle=document.createTextNode(post.title)
// bodytext.appendChild(bodytitle)
// body.appendChild(bodytext)
// const bodycontext=document.createElement('p')
// const bodycontent=document.createTextNode(post.content)
// bodycontext.appendChild(bodycontent)
// body.appendChild(bodycontext)
// card.setAttribute('class','postbody')//body class
// //footer
// const footer=document.createElement('div')
// const footertext=document.createElement('span')
// const votenum=document.createTextNode(votes)
// footertext.appendChild(votenum)
// footer.appendChild(footertext)
// //
// card.setAttribute('class','postfooter')
// card.appendChild(head)
// card.appendChild(body)
// card.appendChild(footer)
// postparent.appendChild(card)


  
  


  return (
    <div id='postparent'>
      <Story/><br/>
     
     {/* <input type='button' value='button' onClick={getdata}/> */}
    </div>
  )}
/*export const getServerSideProps =async ()=>{
   <Card > 
      
      <h4 className={styles.title}>{}</h4>
      <h5 className={styles.desc}>sala Barkas,India.Telangana</h5>
    <Mennu/>
   
      <Votes  />
      </Card><br/>
  var options={
    method:'GET',
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${sessionStorage.getItem('access_token')}`
    }
  }
 const data=fetch(`http://simple-social-ark.herokuapp.com/posts`,options).then(response=>response.json())
   return{
       props:{
           data,
       }
   }
 }*/
export const getServerSideProps =async (context)=>{
  const session=await getSession(context)
 let res=await fetch(`http://simple-social-ark.herokuapp.com/posts`,{
   method:'GET',
   headers:{
     'Authorization':`Bearer ${sessionStorage.getItem('access_token')}`
   }
 })
 const data=res.json()
  return{
      props:{
         data
      }
  }
}
/*  {
  "http://simple-social-ark.herokuapp.com/posts
        Dataa.map((item)=>(
        <div key={item.id}><h2>{item.title}</h2></div>))
      }  {data.map((item)=>
    <div key={item.id}>
      {item.map((items)=>
      <div>{items.title}</div>
      )}
    </div>
    )}*/ 
export default Center
