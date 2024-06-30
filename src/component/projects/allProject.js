"use client";
import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import { imagedata } from "../../../utilities/imagedata";
import Link from "next/link";
export default function Project() {
  
  return (
    <div className={styles.project_container}>
      <div className={styles.project_title}>
        <h1>Our Project</h1>
      </div>
      <div className={`${styles.project_blog}`}>
        {imagedata.map((image, index) => (
          <div  key={index}>
            <Image width={350} height={300} src={image.src} alt={image.alt} className={styles.image_css}/>
          </div>
        ))}
      </div>
      {/* <div className={styles.project_button}>
        <Link href="/upcoming">
          <button>Our Upcoming Projects</button>
        </Link>
      </div> */}
    </div>
  );
}
