"use client"
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css'
import { usePathname, useSearchParams } from 'next/navigation';

function Search({placeholder}) {
  const search = useSearchParams();
  const pathName = usePathname();
  console.log(pathName, search)
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
   );
}

export default Search;