import styles from "../../../../styles/box-animation.module.css";

const BoxAnim = () => {
  return (
    <>
      <section className={styles.sectionBoxanim}>
        <div className={styles.containerBoxanim}>
          <div className={`${styles["grid"]} ${styles["gridFourColumn"]}`}>
            <div className={styles.boxs}>
              <a href="#">
                <img
                  src="https://www.digiprima.com/images/icons8-line-chart-64.png"
                  alt=""
                />
                <p>Financial Analytics Solution</p>
              </a>
            </div>
            <div className={styles.boxs}>
              <a href="#">
                <img
                  src="https://www.digiprima.com/images/icons8-pie-chart-64.webp"
                  alt=""
                />
                <p>Billing & Invoice Solution</p>
              </a>
            </div>
            <div className={styles.boxs}>
              <a href="#">
                <img
                  src="https://www.digiprima.com/images/icons8-increase-64(1).webp"
                  alt=""
                />
                <p>Wealth Management Solution</p>
              </a>
            </div>
            <div className={styles.boxs}>
              <a href="#">
                <img
                  src="https://www.digiprima.com/images/icons8-increase-64.webp"
                  alt=""
                />
                <p>Enterprise Business Intelligence</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BoxAnim;
