import styles from '../styles/Pet.module.css'

const Pet1 = () => {
    return ( 
        <div className={styles.container}>
          <div className={ styles.body }>
          <div className={styles.topleft}>
            <div className={styles.eyebrowleft}></div>
            <div className={styles.outereye}>
            <div className={styles.innereye}>
              <div className={styles.pupil}></div>
            </div>
          </div>
          </div>
          
          <div className={styles.topright}>
            <div className={styles.eyebrowright}></div>
            <div className={styles.outereye}>
            <div className={styles.innereye}>
              <div className={styles.pupil}></div>
            </div>
          </div>
          </div>
          
          <div className={styles.mouth}>
            <div className={styles.tongue}></div>
          </div>
        </div>
      </div>
     );
}
 
export default Pet1;