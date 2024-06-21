"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import { useWindowSize } from "react-use";

export default function About() {
  const windowSize = useWindowSize();
  return (
    <div className={styles.aboutblog}> 
    {/**  image right hand side */}
    <div className={styles.grid_container}>
      <div className={styles.content_container}>
        <h1>
             About US
        </h1>
        <p>
        Aashi Homes is a real estate company known for its commitment to quality and innovation in the housing sector. With a focus on creating homes that offer comfort, convenience, and sustainability, Aashi Homes has garnered a reputation for delivering exceptional residential projects. Their developments often incorporate modern architectural designs, thoughtful amenities, and eco-friendly features to enhance the living experience of residents. From luxurious apartments to spacious villas, Aashi Homes caters to a diverse range of homebuyers, ensuring that each property meets the highest standards of craftsmanship and functionality. Additionally, the company places a strong emphasis on customer satisfaction, striving to exceed expectations at every stage of the homebuying process. With a track record of successful projects and a commitment to excellence, Aashi Homes continues to be a trusted name in the real estate industry, providing individuals and families with homes that they can truly cherish.
        </p>
        {/* <p>
          Because we are small, we are able to focus on one job at a time, make
          sure the customer is always in the loop, and ensure that all details
          are taken care of. Our main focus is on residential renovation,
          remodeling, additions, and outdoor living spaces.
        </p> */}
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


    {/**  image left hand side */}
    <div className={styles.grid_container}>
    <div className={`${styles.image_container}`}>
        <Image
          width={windowSize?.width > 370 ? 650 : 300}
          height={windowSize?.width > 370 ? 200 : 200}
          src="/images/colony.jpeg"
          alt="colony 1"
          objectFit="cover"
          backgroundRepeat="no-repeat"
        />
      </div>
      <div className={styles.right_content_container}>
        <h1>
        Our Vision
        </h1>
        <p>
        To be a leading real estate developer known for innovation and excellence.

        </p>
      </div>

      
    </div>

    </div>
  );
}
