'use client';
import React ,{useEffect, useState} from 'react'
import Image from 'next/image'
import styles from './project.module.css'
import {getAllProject} from '../../../service/projects';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function UpcomingProjects() {


  const [products, setProducts] = useState([]);
  const path = usePathname();
  useEffect(()=>{
    async function fetchData(){
      const data = await getAllProject();
      setProducts(data?.data);
    }
    fetchData();
  
  },[])

  // let products = await getAllProject();
  console.log(products,"allProjects")

    return (
        <div className={styles.project_container}>
          <div className={styles.project_title}>
            <h1>Upcoming Projects</h1>
          </div>
          <div className={styles.upcoming}>
          
          {products && products?.map((project, index) => (
           path === '/upcoming' ?
                <div className={`${styles.project_blog}`} key={index}>
                <div className={styles.image_div}>
                  <Image
                    width={560}
                    height={300}
                    src={project?.image}
                    alt="#upcoming"
                    className={styles.image_css}
                  />
                </div>
                <div className={styles.content_div}>
                  <h1>{project?.title}</h1>
                  <p>
                    {project.desc}
                    </p>
                  <span className={styles.video_play}  >
                     <Link href={`${project.video}`} className={styles?.link_css}>view video</Link></span>
                  <span className={styles.video_play + " " + styles.connect}>
                  <Link href={`${project.connect}`} className={styles?.link_css}>
                    connect
                    </Link>
                  </span>
                </div>
              </div>
            : path==='/'  && index <2  &&
            <div className={`${styles.project_blog}`} key={index}>
            <div className={styles.image_div}>
              <Image
                width={560}
                height={300}
                src={project?.image}
                alt="#upcoming"
                className={styles.image_css}
              />
            </div>
            <div className={styles.content_div}>
              <h1>{project?.title}</h1>
              <p>
                {project.desc}
                </p>
              <span className={styles.video_play}  >
                 <Link href={`${project.video}`} className={styles?.link_css}>view video</Link></span>
              <span className={styles.video_play + " " + styles.connect}>
              <Link href={`${project.connect}`} className={styles?.link_css}>
                connect
                </Link>
              </span>
            </div>
          </div>
        ))}
          </div>
          
        </div>
      );
    }
    