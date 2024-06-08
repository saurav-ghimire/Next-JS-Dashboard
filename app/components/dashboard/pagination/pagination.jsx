"use client"
import styles from './pagination.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

function Pagination({ count }) {
  const search = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const params = new URLSearchParams(search);
  const itemsPerPage = 2;
  
  const page = parseInt(search.get("page") || "1", 10);

  const hasPrev = itemsPerPage * (page - 1) > 0;
  const hasNext = itemsPerPage * page < count;

  const handleChangePage = (type) => {
    const newPage = type === "prev" ? page - 1 : page + 1;
    if (newPage < 1) return; // Prevent negative or zero page numbers

    params.set("page", newPage.toString());
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
