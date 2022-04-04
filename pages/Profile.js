import React from 'react'
import { Avatar } from '@material-ui/core'
import Navbar from '../Component/Navbar'
import { Grid } from '@material-ui/core'
import styles from '../styles/Profile.module.css'
import { Button } from '@material-ui/core'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications'



function Profile() {
   
  return (
    <div>
    <Navbar/>
    <Grid item container>
    <Grid item lg={2} className={styles.leftbar}></Grid>
      <Grid item lg={6} xs={12} >
      <div className={styles.flex}>
      <Avatar alt="Cindy Baker" src="download.jpg" className={styles.avatar}/>
      <h1 className={styles.hsix}>im._.ark</h1>
      <Button variant="outlined">Edit Profile</Button>&nbsp;&nbsp;&nbsp;
      <SettingsApplicationsIcon className={styles.setting}/>
      </div>
      <div className={styles.status}>
         <h4 className={styles.stats}>posts</h4>
         <h4 className={styles.stats}>followers</h4>
         <h4 className={styles.stats}>following</h4>
      </div>
      <div className={styles.htwo}>
      <h4>Abdul Rahman Khan</h4>
      <h5>Education</h5>
      </div>
      <div className={styles.h2}></div>
      </Grid>
      
      <Grid item lg={4} className={styles.rightbar}></Grid>
      </Grid>
      
   

      
    </div>
  )
}

export default Profile
