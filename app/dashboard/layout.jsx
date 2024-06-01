import Header from "../components/dashboard/header/header";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import styles from '../components/dashboard/dashboard.module.css'

function Layout({children}) {
  return ( 
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Header />
        <div>
          {children}
        </div>
      </div>
    </div>
   );
}

export default Layout;