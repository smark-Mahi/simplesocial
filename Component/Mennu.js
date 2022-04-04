import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../styles/Center.module.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
function Mennu() {
  /*const options = [
   'Delete',
   'Update',
   'View'
  ];*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
       <MoreHorizIcon className={styles.dots} onClick={handleClick}/>
       <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      ><MenuItem onClick={handleClose}>Delete</MenuItem>
      <MenuItem onClick={handleClose}>Update</MenuItem>
      <MenuItem onClick={handleClose}>View</MenuItem>
      </Menu>
    </div>
  )
}

export default Mennu
