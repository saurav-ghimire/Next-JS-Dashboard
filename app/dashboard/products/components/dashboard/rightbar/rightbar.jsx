import Image from 'next/image';
import styles from './rightbar.module.css'
import { MdPlayCircleFilled } from 'react-icons/md';
function Rightbar() {
  return ( 
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={'/astronaut.png'} alt='' fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>️‍🔥 Available Now</span>
          <h3 className={styles.title}>How to use new version of admin dashboard</h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className={styles.button}><MdPlayCircleFilled/> Watch</button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={'/astronaut.png'} alt='' fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Comming Soon</span>
          <h3 className={styles.title}>How to use new version of admin dashboard</h3>
          <span className={styles.subTitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className={styles.button}><MdPlayCircleFilled/> Watch</button>
        </div>
      </div>

     
    </div>
   );
}

export default Rightbar;