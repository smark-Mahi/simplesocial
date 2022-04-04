import React from 'react'
import Styles from '../styles/Navbar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import SearchIcon from "@material-ui/icons/Search"
import { Avatar, InputBase,Menu,MenuItem } from '@material-ui/core';
import { useState } from 'react';
//import ListItemIcon from '@material-ui/icons/ListItem';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
//import Logout from '@material-ui/icons/Logout';
import Createpost from './Createpost';


function Navbar() {
  const [item,setitem]=useState(false)
  
  const [close,setclose]=useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    function onmouseover(){
     setitem(true)
    }
    
     function onmouseout(){
       setitem(false)
     }
  return (
    <div className={Styles.Navbar}>
      <div className={Styles.flex}>
      <h3  className={Styles.font}>SmarkMedia</h3>
      <div className={Styles.bg}>
      <SearchIcon />
      <InputBase type="text"  placeholder='Search' />
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <HomeIcon className={Styles.svgs}/>
      <ChatIcon className={Styles.svgs}/>
      <AddBoxOutlinedIcon className={Styles.svgss} onClick={()=>{setclose(true)}} onMouseOver={onmouseover} onMouseOut={onmouseout} />{
        item?<h6 className={Styles.createpost}>createpost</h6>:null
      }{close&&<Createpost setclose={setclose}/>}
      <ExploreIcon className={Styles.svgs}/>
      <FavoriteOutlinedIcon className={Styles.svgs}/>
        <Avatar alt="Cindy Baker" src="download.jpg"  className={Styles.avatar}></Avatar>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <MenuItem>
         
            <PersonAdd fontSize="small" />
          
          Add another account
        </MenuItem>
        <MenuItem>
         
            <Settings fontSize="small" />
          
          Settings
        </MenuItem>
        
      </Menu>
      </div>
      
     
      
    </div>
  )
}

export default Navbar
