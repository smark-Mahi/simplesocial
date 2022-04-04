import React from 'react'
import { Avatar } from '@material-ui/core'
import styles from '../styles/Rightbar.module.css'
function Rightbar() {
  let names=[
    {
      id:1,
      name:"yazim.in456",
      desc:"New to instagram"
    },
    {
      id:2,
      name:"Legit_record_writer",
      desc:"Suggested for you"
    },
    {
      id:3,
      name:"ummekulsum",
      desc:"Suggested for you"
    },
    {
      id:4,
      name:"hoor",
      desc:"Suggested for you"
    },
    {
      id:6,
      name:"summaiya_19",
      desc:"Suggested for you"
    }
  ]
  let follow=[
    {
      id:1,
      follows:"Follow"
    },
    {
      id:2,
      follows:"Follow"
    },
    {
      id:3,
      follows:"Follow"
    },
    {
      id:4,
      follows:"Follow"
    },
    {
      id:5,
      follows:"Follow"
    }
  ]

  return (
    <div className={styles.stick}>
      <Avatar alt="Cindy Baker" src="download.jpg"  className={styles.avatar}/>
      <div className={styles.right}>
      <h4>im._.ark</h4>
      <h5>Switch</h5>
      </div>
      <div className={styles.display}>
        <h4>Suggestions For You</h4>
      </div>
      <Avatar alt="Cindy Baker" src="download.jpg"  className={styles.avata}/>
      <Avatar alt="Cindy Baker" src="images (1).jpg"  className={styles.avata}/>
      <Avatar alt="Cindy Baker" src="images (2).jpg"  className={styles.avata}/>
      <Avatar alt="Cindy Baker" src="images (7).jpg"  className={styles.avata}/>
      <Avatar alt="Cindy Baker" src="images (8).jpg"  className={styles.avata}/>
      {
        names.map((item)=>
      <div className={styles.list} key={item.id}>
        <h4>{item.name}</h4>
        <h6 >{item.desc}</h6>
      </div>
     
      )
      }
      {
        follow.map((fllw)=>
        <div className={styles.fllow} key={fllw.id}> <h5 className={styles.followlist}>{fllw.follows}</h5></div>
       )
      }
    </div>
  )
}

export default Rightbar
