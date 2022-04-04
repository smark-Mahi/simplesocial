import React from 'react'
import styles from '../styles/Story.module.css'
import { Avatar } from '@material-ui/core'


function Story() {
  const names=[
    {
      name:"im._.ark"
    },
    {
      name:"kabeer_.."
    },
    {
      name:"hoor_72"
    },
    {
      name:"umme_.."
    },
    {
      name:"saba_d.."
    },
    {
      name:"sum.."
    },
    {
      name:"rahmath.."
    },
    {
      name:"humera.."
    },
    {
      name:"zhora.."
    },
    {
      name:"ishaq_.."
    },
    {
      name:"salman.."
    },
    {
      name:"Amer_bindiy.."
    }
  ]
  return (
    <div className={styles.container}>
    <div className={styles.flex} >
    <Avatar alt="Cindy Baker" src="download.jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="download 1.jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="download (2).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images.jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (1).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (2).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (3).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (4).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (5).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (6).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (7).jpg"  className={styles.avatar}/>
    <Avatar alt="Cindy Baker" src="images (8).jpg"  className={styles.avatar}/>

    </div>
    <div className={styles.flex1}>
       {
         names.map((namee)=>
         <h6 className={styles.hsix}>{namee.name}</h6>)
       }
        
    </div>
      
    </div>
  )
}

export default Story
