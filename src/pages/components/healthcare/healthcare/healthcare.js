
import styles from '../../../../styles/healthcare.module.css'


const Heathcare = () => {
  return (
    <>
      <section className={styles['section-heathcare']}>
        <div className={styles.container}>
          <div className={styles['section-heading']}>
            <h3>Healthcare Software Solutions</h3>
            <p className={styles['section-para']}>
              Achieve your most challenging goals & make data-driven decisions
              with innovative software solutions.
            </p>
          </div>
          <div className={`${styles["grid"]} ${styles["grid-two-column"]}`}>
            <div className={styles['column-1']}>
              <h2>Building Better Products For Healthcare Industry</h2>
              <p>
                Collaborating with DigiPrima will give you custom and
                
                human-centered software applications for your healthcare or
                research company. With our design strategies and development, we
                can help you improve the lives of your patients. We are a team
                of T-shaped medical experts ready to assist you at every step of
                your custom healthcare software, and hospital management system
                development journey. Get started using our healthcare software
                services.
              </p>
              <br />
              <ul>
                <li>Experience working with HIPAA, HITECH, and FDA requirements and <br/>healthcare standards.
</li>
                <li>Enterprise options for cloud and mobile applications.</li>
                <li>Service Options Staff Augmentation and Fully Managed Solutions.</li>
              </ul>
            </div>
            <div className={styles['column-2']}>
              <img src="https://www.digiprima.com/images/digi-healthcare.webp " alt="" />
              <div className={styles['btn-comp']}>
                <button className={styles['all-btn']}>Find out more</button>
                <button className={styles['all-btn']}>Content For Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heathcare;
