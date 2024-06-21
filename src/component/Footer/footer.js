import React from 'react'
import styles from './footer.module.css'
import { FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
export default function Footer() {
  return (
    <div className={styles.footer_div}>
      <div>
      H.NO. 24 sai nagar opposite victory college M.P (462042) | Phone: +91 9926728222 
      | Email: aashihomes5915@gmail.com 
      &nbsp;| <a href='https://youtube.com/@aashihomes7848?si=VswFvEs6Gyic' 
      className={styles.icon} target='_black' >
        Youtube  <FaYoutube className={styles.icon}/> </a> 
      &nbsp;| <a href='https://www.linkedin.com/company/100897596' target='_black'
       className={styles.icon} >
        LinkedIn  <IoLogoLinkedin className={styles.icon}/></a>
      </div>
      <div>  Copyright © 2024 Aashi Homes</div>

    </div>
  )
}