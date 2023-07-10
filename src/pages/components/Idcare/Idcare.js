import React from 'react'
import styles from '../../../styles/Idcare.module.css'




const Idcare = () => {
  return (
    <section className={styles['section-idcare']}> 
    <div className={styles.container}>
        <div className={`${styles['grid']} ${styles['grid-two-column']}`}>
            <div className={styles.idcare}>
                <div>
                    <img src="https://www.digiprima.com/images/sec5-iphone.webp" alt="" />
                </div>
            </div>
            <div className={styles['column-2']}>
            <h2>
                ID CARE
              </h2>
              <hr className={styles['left-line']} />
              <p>
              Connecting patients to the highest level of infectious disease expertise at ID Care. Patient Portal is a secure, convenient, and easy way to access your health information
              </p>
            
              <ul>
                <li>Communicate with your provider. Get reminders.</li>
                <li>Manage your appointments.</li>
                <li>Access your test results.</li>
                <li>View your medications and request refills</li>
              </ul>
              <div className={styles['idcare-btn']} > 
           
                <button className={`${styles['all-btn']} ${styles['black']}`} > Find Out More</button>
              </div>
             
            </div>
        </div>

    </div>
    </section>
  )
}

export default Idcare