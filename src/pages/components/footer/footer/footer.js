import styles from '../../../../styles/footer.module.css'

import { Facebook, Instagram, Linkedin, Twitter, Whatsapp } from "react-bootstrap-icons";


const Footer = () => {
  return (
    <footer className={styles['section-footer']}>
      <div className={styles.container}>
        <div className={`${styles['grid']} ${styles['footer-grid-four-column']}`}>
          <div className={styles['footer-column-1']}>
            <div className={styles['logo-div']}>
              <a href="">
                <img
                  src="https://www.digiprima.com/images/logo-digi-w.webp"
                  alt="company logo"
                />
              </a>
            </div>
            <p className={styles['footer-para-column-1']}>
              <b className={styles['discuss-plain']}>
                Do you have a project in mind? <br />
                Let's Discuss:
              </b>
              <br />
              <br />
              <a href="mailto:info@digiprima.com">
                <b className={styles['mail-footer']}>info@digiprima.com</b>
              </a>
            </p>
          </div>
          <div className={styles['footer-column-2']}>
            <div className={styles['common-footer-div-heading']}>
              <h4>USEFUL LINK</h4>
            </div>
            <ul className={styles['footer-li']}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Case Study</a>
              </li>
              <li>
                <a href="#">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-column-3']}>
            <div className={styles['common-footer-div-heading']}>
              <h4>CONTACT US</h4>
            </div>
            <ul className={styles['footer-li']}>
              <li>
                <a href="#">47 W 13th St,</a>
              </li>
              <li>
                <a href="#">
                  NY 10011, New York, USA
                </a>
              </li>
              <li>
                <a href="mailto:info@digiprima.com">info@digiprima.com</a>
              </li>
              <li>
                <a href="tel:+1 (347) 973 9732">
                  <span> +1 (347) 973 9732</span>
                </a>
              </li>
              <br />
              <li>110-Gurudev plaza, Indore, India</li>
              <li>
                <a href="mailto:info@digiprima.com">info@digiprima.com</a>
              </li>
              <li>
                <a href="tel:+91 97555 70042">
                  <span> +91 97555 70042</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-column-4']}>
            <div className={styles['common-footer-div-heading']}>
              <h4>POPULAR TAGS</h4>
            </div>
            <div className={styles["popular-tag-div"]}>
              <a href="#">
                AngularJS
              </a>
              <a href="#">
                ReactJS
              </a>

              <a href="#">NodeJS</a>
              <a href="#">
                Flutter
              </a>

              <a href="#">
                Mean Stack
              </a>

              <a href="#">iOS</a>

              <a href="#">
                Android
              </a>

              <a href="#">
                .NET
              </a>
              <a href="#">
                Wordpress
              </a>

              <a href="#">JAVA</a>
              <a href="#">
                Magento
              </a>
              <a href="#">
                Laravel
              </a>
              <a href="#">
                Social
              </a>
              <a href="#">
                PHP
              </a>
              <a href="#">
                E-commerce
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles['footer-last-div']}>
        <div className={styles.container}>
          <div className={styles['footer-last-div-heading']}>
            <div>
              <h4>©{new Date().getFullYear()} digiprima. all rights reserved</h4>
            </div>
            <div className={styles['footer-social-icons']}>
              <ul className={styles['social-icons-li']}>
                <li>
                  <a
                    href="https://www.facebook.com/DigiprimaTech"
                    target="_blank"
                    title="DigiPrima Facebook Oficial Account"
                  >
                    <Facebook/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919755570042&amp;text=I%27m+interested+in+your+Services.%0Aplease+contact+me&amp;app_absent=0"
                    target="_blank"
                    title="DigiPrima whatsapp Account"
                   
                  >
                    {/* <Facebook /> */}
                    <Whatsapp/>
                    {/* <FaWhatsapp /> */}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/digiprima-technologies/"
                    target="_blank"
                    title="DigiPrima linkedin Oficial Account"
                    
                  >
                    {" "}
                  
                    <Linkedin/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/digiprimatech"
                    target="_blank"
                    title="DigiPrima twitter Oficial Account"
                  
                  >
                 
                  
                     <Twitter/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/digiprima/"
                    target="_blank"
                    title="DigiPrima instagram Oficial Account"
                   
                  >
                    <Instagram/>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
