import styles from '../../../styles/openAI.module.css'


const OpenAi = () => {
  return (
    <>
      <section className={styles['section-openai']}>
        <div className={styles.container}>
          <div className={`${styles['grid']} ${styles['grid-two-column']}`}>
            <div className={styles['column-1']}>
              <div>
              <img
                src="https://www.digiprima.com/images/chagpt.webp"
                alt="openAI chat support"
               
              />
              </div>
            </div>
            <div className={styles['column-2']}>
              <h2 >
                Increase Productivity With <br />
                OpenAI ChatGPT Support
              </h2>
              <hr className={styles['left-line']} />
              <p>
                Empower your team and delight customers 3x faster by
                accelerating time-to-reply with an AI Chatbot. All your content
                in one place to create, integrate, analyze, and optimize.
              </p>
              <br />
              <p>
                Get better results with OpenAI ChatGPT and be confident in your
                writing. Whether you’re writing to inform, persuade, educate,
                entertain or express yourself.
              </p>
              <ul>
                <li>Reduce operational costs.</li>
                <li>Reduce agent churn.</li>
                <li>Increase users loyality.</li>
              </ul>
              <div className= {styles['openai-btn']}>
              <button className={`${styles['all-btn']} ${styles['black']}`}>Find out more</button>
              <button className={`${styles['all-btn']} ${styles['black']}`}>contact for demo</button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenAi;
