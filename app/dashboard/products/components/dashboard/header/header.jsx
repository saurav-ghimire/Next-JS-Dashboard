"use client"
import { usePathname } from 'next/navigation';
import styles from './header.module.css'
import { MdSearch, MdInsertChartOutlined, MdNotifications, MdPublic } from 'react-icons/md';

function Header() {
  const title = usePathname().split('/').pop();
  return ( 
    <div className={styles.container}>
        <div className={styles.title}>
            {title}
        </div>
        <div className={styles.menu}>
          <div className={styles.search}>
            <MdSearch />
            <input type="text" placeholder='Search' className={styles.input} />
          </div>
          <div className={styles.icons}>
            <MdInsertChartOutlined />
            <MdNotifications />
            <MdPublic />
          </div>
        </div>
    </div>
   );
}

export default Header;