import Header from "../components/dashboard/header/header";
import Sidebar from "../components/dashboard/sidebar/sidebar";
import styles from '../components/dashboard/dashboard.module.css'
import Footer from "../components/dashboard/footer/footer";

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
        <Footer/>
      </div>
    </div>
   );
}

export default Layout;