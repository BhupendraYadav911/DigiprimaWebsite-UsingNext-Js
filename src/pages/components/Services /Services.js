import styles from '../../../styles/Services.module.css'

const Serivces = () => {
    return (
      <>
      <section className={styles.sectionSerivces}>
      <div className={styles.containerSerivces}>
          <div className="row">
              <div className="col-sm-12 section-heading">
                  <h3 className={`${styles.secHead} font-900 our-36px`}>Why our fintech application development services?</h3>
              </div>
              <div className="col-md-6 col-sm-6">
                  <div className={styles.serviceItem1}>
                      <h4 className="font-900 font-23px"> Round-the-clock support and maintenance</h4>
                      <p>The fintech landscape is always changing, and we help you stay at the forefront of it by
                          providing face-to-face support and guidance to your application. </p>
                  </div>
              </div>
  
              <div className="col-md-6 col-sm-6">
                  <div className={styles.serviceItem1}>
                      <h4 className="font-900 font-23px">One-stop design, development and maintenance </h4>
                      <p>We develop an integrated financial solution for online banking, payment, and exchange services,
                          backed by a strong UX that delivers full security and protection.</p>
                  </div>
              </div>
  
              <div className="col-md-6 col-sm-6">
                  <div className={styles.serviceItem1}>
                      <h4 className="font-900 font-23px"> Multi-Platform Responsive Design </h4>
                      <p>Customers love when their favourite apps follow them across all of their devices. Our experts
                          develop fintech applications that work on desktop, mobile, and tablets. </p>
                  </div>
              </div>
  
              <div className="col-md-6 col-sm-6">
                  <div className={styles.serviceItem1}>
                      <h4 className="font-900 font-23px"> Security and compliance </h4>
                      <p>We are committed to developing a PCI-compliant fintech app by leveraging top-level security
                          technologies and standards.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
      </>
    )
  }
  
  export default Serivces