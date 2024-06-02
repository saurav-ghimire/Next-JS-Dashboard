import Image from 'next/image';
import styles from './transactions.module.css'
function Transactions() {
  return ( 
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                src='/avatar.jpg'
                alt=""
                width={40}
                height={40}
                className={styles.userImage}  />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>06.01.2024</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                src='/avatar.jpg'
                alt=""
                width={40}
                height={40}
                className={styles.userImage}  />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>06.01.2024</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                src='/avatar.jpg'
                alt=""
                width={40}
                height={40}
                className={styles.userImage}  />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
            </td>
            <td>06.01.2024</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                src='/avatar.jpg'
                alt=""
                width={40}
                height={40}
                className={styles.userImage}  />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>06.01.2024</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}

export default Transactions;