import styles from '../../../styles/BuildStrategic.module.css'
import { ArrowRight } from 'react-bootstrap-icons';

const BuildStrategic = () => {
  return (
    <>
    <section className={`${styles.defaultBag} ${styles.section}`}>
      <div className="container">
        <div className="row mt-10 justify-content-center">
          <div className="col-lg-8 col-sm-10 col-xs-12 centerize-col text-center white-color">
            <div className={`${styles.sectionHeading} white-color`}>
              <h5 className={`${styles.textHd}`}>We at Digi Prima are available 24/7 to collaborate and guide you with the right
                        strategy and tools to help you succeed in your business intelligence, big data, or data science
                        solutions.</h5>
            </div>
            <h5 className={`fw-bold p-3 ${styles.fontText}`}>Build strategic &amp; business insights with Our Data Analytics Consulting Services</h5>
            <a href="/contact" className={`${styles.allBtn} ${styles.btnColor}btnAnimate1 btnReview  `}>
              Book a Free Consultation<ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default BuildStrategic