import Link from "next/link";
import styles from "../../../styles/Navbhun.module.css";

import React, { useState } from "react";

import { List } from "react-bootstrap-icons";


// import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { Link } from "react-router-dom";

const Navbhun = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
     
      <nav className={styles["main-nav"]}>
        {/* {/ 1st logo part  /} */}
        <div className={styles.logo}>
          <img
            src="https://www.digiprima.com/images/logo-digi.webp"
            className={styles.websiteLogo}
            style={{ maxHeight: "59px",marginLeft:"50px" }}
            alt="logo"
          />
         
        </div>

        {/* {/ 2nd menu part  /} */}
        <div
          className={
            showMediaIcons
              ? `${styles["menu-link"]} ${styles["mobile-menu-link"]}`
              : styles["menu-link"]
          }
        >
          <ul className={styles.navli}>
            <li >
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Home</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>about</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>services</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Company</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Careers</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>Blogs</Link>
            </li>
            <li>
              <Link href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>contact us</Link>
            </li>
            <li>
              <Link href="/" className={styles.numberli} onClick={() => setShowMediaIcons(!showMediaIcons)}>+1 (347)973 9732</Link>
            </li>
            
          </ul>
        </div>

        
        <div className={styles["social-media"]}>
     

          <div className={styles["hamburger-menu"]}>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <List />
            
            </a>
          </div>
        </div>
      </nav>

      {/* {/ hero section  /} */}
      {/* <section className="hero-section">
        <p>Welcome href </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbhun;
