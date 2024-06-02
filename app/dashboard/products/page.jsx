import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/products/products.module.css'

import Image from 'next/image';
import Link from 'next/link';

function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <Search placeholder={'Search for a Products'} />
          <Link href={'/dashboard/products/add'}>
          <button className={styles.addButton}>Add New</button>
          </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image src={'/noproduct.jpg'} height={40} width={40} alt='User/' className={styles.productImage} />
              Iphone
            </td>
            <td>This is test</td>
            <td>$1100</td>
            <td>06.02.2024</td>
            <td>20</td>
            <td className={styles.buttons}>
              <Link href={'/'}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href={'/'}>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}

export default ProductsPage;