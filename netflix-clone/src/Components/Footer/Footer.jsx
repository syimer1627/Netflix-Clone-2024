import React from 'react'
import  "../../components/Footer/footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';





function Footer() {
  return (
    <>
      <div className="main_outer_container">

        {/* First section */}

         <div className="footer_outer_container">
          <ul>
          <div className="Icons">
          <FacebookOutlinedIcon />
            <InstagramIcon />
           <YouTubeIcon />
            </div>
            <li>Aouto Description</li>
            <li>Inverter Relation</li>
            <li>Legal Notice</li>
            <div className="square">
              <li>Service Code</li>
            </div>
            <li><CopyrightIcon /> 1997:2024 Netflex</li>
            </ul>
           </div>

          {/* Second section */}

        <div className="footer_outer_container">
        <ul>
        <li>Help Center</li>
         <li>Jobs</li>
         <li>Cookie Preferences</li>
        </ul>
        </div>

        {/* Third section */}

        <div className="footer_outer_container">
        <ul>
         <li>Gift Card</li>
        <li>Terms of Use</li>
        <li>Corporate Information</li>
        </ul>
        </div>

        {/* Fourth section */}

        <div className="footer_outer_container">
        <ul>
        <li>Media Center</li>
         <li>Privacy</li>
          <li>Contact Us</li>
          </ul>
         </div>
         </div>
        </>
     );
}

export default Footer;