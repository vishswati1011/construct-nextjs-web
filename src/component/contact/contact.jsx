"use client";
import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function Contact() {
  const windowSize = useWindowSize();
  return (

    <>
      <div className={styles.grid_container}>
        <div className={styles.content_container}>
          <h1>We’d love to talk about your next project at Aashi Homes.</h1>
          <p>
          Whether you are dreaming of a luxury villa, a family-friendly home, or a stylish urban apartment, our expert team is here to bring your vision to life. We offer personalized consultations to understand your needs and provide tailored solutions. With our commitment to quality, innovative design, and exceptional customer service, we ensure your home-buying journey is seamless and enjoyable. Let&apos;s create your perfect home together. Contact us today to start the conversation.
          </p>
        </div>

        <div className={`${styles.image_container}`}>
          <Image
            width={windowSize?.width > 370 ? 650 : 300}
            height={windowSize?.width > 370 ? 400 : 200}
            src="/images/colony.jpeg"
            alt="colony 1"
          />
        </div>
      </div>

      <div className={styles.contact_info_div}>
            <div className={styles.contactInfoComman + " " + styles.contactInfo}>
              <div >
                <FaSquarePhone className={styles.icon}/>
              </div>
              <div className={styles.phoneNumber}>
                <h4>Our Phone</h4>
                <p> +91 9926728222</p>
              </div>
            </div>

            <div className={styles.contactInfoComman + " " + styles.contactInfo}>
              <div >
                <MdEmail className={styles.icon} />
              </div>
              <div className={styles.phoneNumber}>
                <h4>Our Email</h4>
                <p>aashihomes5915@gmail.com</p>
              </div>
            </div>

            <div className={styles.contactInfoComman + " " + styles.contactInfo}>
            <div>
                <IoLocation  className={styles.icon}/>
              </div>
              <div className={styles.phoneNumber}>
                <h4>Our Address</h4>
                <p>H.NO. 24 sai nagar opposite victory college</p>
              </div>
            </div>
          </div>
          </>
  );
}
