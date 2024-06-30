"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { imagedata } from "../../../utilities/imagedata";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ProjectBlog from "../projects/project";
import Link from "next/link";
import { useWindowSize } from "react-use";
import UpcomingProjects from "../upcoming/project";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = imagedata && imagedata.length;
  const windowSize = useWindowSize();
  const visibleSlides = windowSize && windowSize.width > 370 ? 4 : 1;

  const handleNextSlide = () => {
    console.log("click", );
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - visibleSlides ? 0 : prevSlide + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - visibleSlides : prevSlide - 1
    );
  };
console.log(currentSlide,"currentSlide")
  useEffect(() => {
    const intervalId = setInterval(() => handleNextSlide(), 2000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.home_div}>
      <section className={styles.carousel_home_css}>
        <div className={styles.carousel_div}>
          <h1>AASHI HOMES</h1>
          <p>AASHI HOMES: BUILDING DREAMS YOUR PERFECT SPACE AWAITS!</p>
        </div>
      </section>
      {/** Moew About Us */}
      <div className={styles.grid_container}>
        <div className={styles.content_container}>
          <h1>
          Welcome to Aashi Homes
          </h1>
         <p>
          Where luxury meets comfort. Our meticulously designed homes offer a perfect blend of modern architecture and traditional values, creating a serene and elegant living experience. From spacious luxury villas to stylish urban apartments, each property is crafted with high-quality materials and attention to detail, ensuring you find a home that suits your lifestyle and needs.
         </p>
        
          <p>
          At Aashi Homes, we believe in building more than just structures; we create communities where families can thrive. Our commitment to exceptional customer service ensures a seamless home-buying journey, from initial consultation to final handover. With comprehensive services including home financing assistance, personalized interior design, and dedicated after-sales support, we are here to help you every step of the way. Discover your dream home with Aashi Homes, where every detail is a testament to our dedication to excellence.
          </p>
         <Link href='/about'>
          <button>More About Us</button>
          </Link>
        </div>

        {imagedata &&
          imagedata?.map(
            (image, index) =>
              index >= currentSlide &&
              index < currentSlide + 1 && (
                <div
                  key={index}
                  className={`${styles.image_container}`}
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    width={windowSize?.width > 400? 650 : 300}
                    height={windowSize?.width > 400? 400 : 200}
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              )
          )}
      </div>

      {/* ccarousel div*/}
      <div className={styles.carousel_container}>
        <div className={styles.carousel_slides} ref={slideRef}>
          <FaChevronLeft
            width={25}
            height={25}
            className={styles.carousel_prev}
            onClick={handlePrevSlide}
          />

          {imagedata &&
            imagedata?.map(
              (image, index) =>
                index >= currentSlide &&
                index < currentSlide + visibleSlides && (
                  <div key={index} className={`${styles.carousel_slide}`}>
                    <Image
                      width={300}
                      height={300}
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                )
            )}
          <FaChevronRight
            width={25}
            height={25}
            className={styles.carousel_next}
            onClick={handleNextSlide}
          />
        </div>
      </div>

      {/**  project blog */}
      <ProjectBlog />

      <div className={styles.project_button}>
        <Link href="/project">
          <button>View More</button>
        </Link>
      </div>

      {/* <UpcomingProjects />

      <div className={styles.project_button}>
        <Link href="/upcoming">
          <button>View More</button>
        </Link>
      </div> */}
    </div>
  );
}
