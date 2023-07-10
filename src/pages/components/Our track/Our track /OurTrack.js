import styles from '../../../../styles/ourtrack.module.css'



const OurTrack = () => {
  return (
    <section className={styles['section-ourtrack']}>
      <div className={styles['container']}>
        <div className={styles['section-heading']}>
          <h3>OUR TRACK RECORD</h3>
          <p className={styles['section-para']}>
            We strongly believe that embracing Digital transformation is the
            primary need of any business to stay in tandem with the perennial
            advancement. Hence, we deliver unveiling.
          </p>
        </div>
        <div className={`${styles['grid']} ${styles['grid-two-column']}`}>
          <div className={styles['column-1']}>
            <div>
              <img
                src="https://www.digiprima.com/images/syndifi1.webp"
                alt=""
              />
            </div>
          </div>
          {/* <div className="column-2 my-4"> */}
          <div className={`my-4 ${styles['column-2']}`}>
          
            <h2>
              Fintech Services <br />
              Marketplaces – Syndifi
            </h2>
            <p className="my-4">
              Syndifi, Syndication Platform was founded by Dan Michalek, who
              also revolutionized and digitized the granting of credit within
              the Equipment Finance industry with the formation of PayNet which
              is now a division of Equifax.
            </p>
            <br />
            <p>
              The Syndifi platform is built to modernize the Syndicatio n
              process around secure file sharing. The platform is designed as a
              CRM system to track deal activity for Sellers and create a better
              presentation of the transaction for Buyers.
            </p>

            <div className= {styles['openai-btn']}>
              <button className={`${styles['all-btn']} ${styles['black']}`}>Find out more</button>

            </div>
          </div>
          <div className={styles['column-3']}>
            <div>
              <h2>
                Equipment Financi <br /> Marketplace – <br /> FinanceExchange
              </h2>
              <p className="my-4">
                Syndifi, Syndication Platform was founded by Dan Michalek, who
                also revolutionized and digitized the granting of credit within
                the Equipment Finance industry with the formation of PayNet
                which is now a division of Equifax.
              </p>
              <br />
              <p>
                The Syndifi platform is built to modernize the Syndicatio n
                process around secure file sharing. The platform is designed as
                a CRM system to track deal activity for Sellers and create a
                better presentation of the transaction for Buyers.
              </p>

              <div className={`${styles['openai-btn']} ${styles['divpaddingremove']}` } >
             <button className={`${styles['all-btn']} ${styles['black']}`}>See the project</button>
              </div>
            </div>
          </div>
          <div className={styles['column-4']}>
            <div>
              <img
                src="https://www.digiprima.com/images/finaceexchange.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrack;
