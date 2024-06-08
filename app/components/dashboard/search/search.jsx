"use client"
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function Search({ placeholder }) {
  const search = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleOnChange = (e) => {
    const params = new URLSearchParams(search);
    if (e.target.value.length > 0) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleOnChange} />
    </div>
  );
}

export default Search;
