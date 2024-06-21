"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWindowSize } from "react-use";
import Link from "next/link";
import "../../app/globals.css";

const Header = () => {
  const path = usePathname();
  const size = useWindowSize();
  const [pathname, setPathname] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 1300,
    height: 800,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setPathname(path);

    setWindowSize(size);
  }, [path]);

  return (
    <header className="navbar_header">
      <div className="logo">
        <Link href="/">
        <Image
          src="/images/navbar/a_logo.jpeg"
          alt="logo"
          width={200}
          height={50}
          className="logo_image"
        />
        </Link>
      </div>
      {windowSize?.width > 768 ? (
        <nav className="nav_div">
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active_link_css" : "link_css"}
              >
               Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  pathname === "/about" ? "active_link_css" : "link_css"
                }
              >
                About US
              </Link>
            </li>
            <li>
              <Link
                href="/project"
                className={
                  pathname === "/project" ? "active_link_css" : "link_css"
                }
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact" ? "active_link_css" : "link_css"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <div className="dropdown">
          <div class="input-group mb-3" onClick={toggleDropdown}>
           
            <input
              type="text"
              class="form-control"
              placeholder="Go to..."
              aria-label="Username"
              onClick={toggleDropdown}
              aria-describedby="basic-addon1"
            />
          </div>
          {isOpen && (
            <ul id="myDropdown" className="dropdown-content">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About US</a>
              </li>
              <li>
                <a href="/project">Our Projects</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
