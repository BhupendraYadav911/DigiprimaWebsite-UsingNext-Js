import { ArrowRight } from 'react-bootstrap-icons';
import styles from '../../../styles/FreeConsultation.module.css'

const FreeConsultation = () => {
  return (
    <>
    <section className={styles['section-d']} >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 centerize-col text-center text-white relative">
            <span className={` ${styles['font-25px']}`} 
            // className="sm-mb-30 font-25px display-inline-block mr-30 font-700"
            >
              Ready to build your custom application solution?
            </span>
            <a href="#">
              <button className={`${styles.allBtn} ${styles.btnColor}btnAnimate1 btnReview  `}
            //    className="btn-color btn-animate1 btn-review btn"
               >
                Get Free Consultation <ArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FreeConsultation