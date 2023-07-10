
import Carousel from "react-bootstrap/Carousel";
import styles from '../../../styles/HomeHeader.module.css'

function HomeHeader() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className={`d-block ${styles["swiper-image"]}`}
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={`${styles["container"]} ${styles["grid"]} ${styles["grid-two-column"]}`}>
              <div>
                <h1>
                  Digitizing Medical Industry <br />
                  with Healthcare Software Solutions
                </h1>
                <p className={styles["swiper-caption-text"]}>
                  Whether you are converting existing applications or starting
                  from scratch, we take on complex challenges and are able to
                  provide the best fintech software solutions
                </p>
              </div>

              <div className={styles["grid-second-column"]}>
                <h2>HIPAA-Compliant Healthcare Sofware</h2>
                <h2>Patient Management</h2>
                <h2>Insurance Claim Management</h2>
                <h2>Telehealth Applications</h2>
              </div>
              <div className={styles["vertical-line"]}></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block ${styles["swiper-image"]}`}
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className={`${styles["container"]} ${styles["grid"]} ${styles["grid-two-column"]}`}>
              <div>
                <h1>
                  Bespoke Fintech Software Development & Financial Data
                  Analytics
                </h1>
                <p className={styles["swiper-caption-text"]}>
                  Information is critical to patient care in the virtual world.
                  Our healthcare platform provides easy access to patient
                  information and data management to improve care.
                </p>
              </div>
              <div className={styles["grid-second-column"]}>
                <h2>Automated Account Processing</h2>
                <h2>Account Software Solutions</h2>
                <h2>Cloud Based Accounting</h2>
                <h2>AI, RPA, Blockchain</h2>
              </div>
            <div className={styles["vertical-line"]}></div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HomeHeader;

