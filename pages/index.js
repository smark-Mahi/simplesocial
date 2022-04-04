import Head from 'next/head'
import Navbar from '../Component/Navbar'
import Styles from '../styles/Home.module.css'
import LeftBar from '../Component/LeftBar'
import Rightbar from '../Component/Rightbar'
import Center from './Center'
import { Grid } from '@material-ui/core'
import axios from 'axios'
//import { AuthProvider } from '../context/AuthProvider'




export default function Home(data) {
    
  return (
    <div className={Styles.container}>
   
    <Navbar/>
      <Grid item container spacing={1}>
      <Grid item lg={2} className={Styles.leftbar}><LeftBar/></Grid>
      <Grid item lg={6} xs={12} className={Styles.center}><Center/></Grid>
      <Grid item lg={4} className={Styles.rightbar}><Rightbar/></Grid>
      </Grid>
     
    </div>
  )
}


/*export async function getServerSideProps(){
  
  const res=await fetch(`http://simple-social-ark.herokuapp.com/posts`);
  const Authorization=`Bearer ${sessionStorage.getItem('access_token')}`
  if (res.status===200){
      const task=await res.json();
      return{
          props:{
              task,
          },
      };
  }
}*/
