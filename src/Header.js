import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import  NotificationsIcon from '@mui/icons-material/Notifications'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"/>
        </div>
        <div className="header__middle">
          <SearchIcon />
          <input  placeholder="Search Mail" type="text"/>
          <ArrowDropDown className="header__inputCaret"/>
        </div>
        <div className="header__right">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <AccountCircleIcon/>

        </div>
    </div>
  )
}

export default Header;