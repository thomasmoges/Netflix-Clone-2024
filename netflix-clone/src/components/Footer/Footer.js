import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer_outer_container'>
    <div className='footer_inner_container'>
      <div className='footer_icons'>
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <div className='footer_data'>
        <div >
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>

        </div>

        <div>
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>CookiePreferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='server_code'>
          <p>
            Service Code
          </p>
        </div>
        <div className='copy-write'>
          &copy; 1997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer