import React from 'react';
import styles from './about.module.css';
import type { Metadata } from 'next'
import AboutBlog from '@/component/about/about'
import { FaPerson } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { MdSavings } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { MdOutlineColorLens } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
export const metadata: Metadata = {
  title: 'About US',
  description: 'We build best for you.',
}

export default function About() {

  return (
      <div className={styles.aboutdiv}>
         <div className={styles.aboutTitle}>
         <h1>What We Do</h1>
          <p> 
          At Aashi Homes, we specialize in creating luxurious and comfortable living spaces that cater to diverse lifestyles. Our homes are a perfect blend of modern architecture and traditional values, designed to provide a serene and elegant living experience. We offer a wide range of properties including spacious villas, family-friendly homes, and stylish urban apartments, each crafted with meticulous attention to detail and high-quality materials. </p> 
          <p>
          Our commitment extends beyond just building houses; we aim to create communities where families can thrive. From initial consultations to the final handover, our dedicated team ensures a seamless and personalized home-buying journey. We also provide comprehensive services including home financing assistance, personalized interior design, and property management to maintain the beauty and functionality of your home. Our after-sales support is always ready to assist with any post-purchase needs, ensuring that your experience with Aashi Homes is exceptional and enduring. 
          </p>
          <p>
          At Aashi Homes, we believe in building more than just structures; we build homes filled with love, joy, and lasting memories. Trust us to bring your dream home to life, where luxury meets comfort, and every detail is a testament to our unwavering dedication to excellence.
          </p>
         </div>
          <h1>How We Do it</h1>
          <div className={styles.about_card_div}>
              <div className={styles.about_card}>
              <h2><SiMaterialdesignicons size={40}/></h2>
                <div className={styles.about_sub_card}>
                  <h5>
                  Innovative Design
                  </h5>
                  <h6>Modern, elegant architecture.</h6> 

                </div>
              </div> 
              <div className={styles.about_card}>
                 <h2><MdSavings size={40}/></h2>
                 <div className={styles.about_sub_card}>
                  <h5>
                  Quality Materials
                  </h5>
                  <h6>Top-grade construction supplies.</h6> 

                </div>
              </div> 
              <div className={styles.about_card}>
                 <h2><GoGoal size={40}/></h2>
                 <div className={styles.about_sub_card}>
                  <h5>
                  Personalized Service
                  </h5>
                  <h6>Tailored home-buying experience.</h6> 

                </div>
              </div> 
             
              
          </div>  

          <div className={styles.about_card_div}>
          <div className={styles.about_card}>
                <h2><FaPerson size={40}/></h2>
                <div className={styles.about_sub_card}>
                  <h5>
                  Expert Team
                  </h5>
                  <h6>Skilled professionals at every step.</h6> 

                </div>
              </div> 

              <div className={styles.about_card}>
                <h2><MdOutlineColorLens size={40} width={30} height={30}/></h2>
                <div className={styles.about_sub_card}>
                  <h5>
                  Sustainable Practices
                  </h5>
                  <h6>Eco-friendly building methods.</h6> 

                </div>
              </div> 
              <div className={styles.about_card}>
                <h2><FaUsersBetweenLines size={40} width={30} height={30}/></h2>
                <div className={styles.about_sub_card}>
                  <h5>
                  Customer Support
                  </h5>
                  <h6>Dedicated after-sales assistance.</h6> 

                </div>
              </div> 
              
          </div> 

         <AboutBlog/>   
      </div>
  )
}
