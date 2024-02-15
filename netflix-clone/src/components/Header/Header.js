import React from 'react'
import "./Header.css"
import NetfliexLogo from "../../assets/images/Netflix_Logo_PMS.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
      <div className='header_container'>
      {/* <div className=' flex header w-full items-center 
      justify-between absolute z-{100}'> */}
      <div className='header_left'>
      {/* <div className='font-bold text-white-600 px-4 py2
      text-5xl cursor-pointer'> */}

        <ul>
          <li><img src={NetfliexLogo} alt="Netfliex Logo" width="100" /></li>
          <li>Netfliex</li>
          <li>Home</li>
          <li>TvShows</li>
          <li>Movies</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header