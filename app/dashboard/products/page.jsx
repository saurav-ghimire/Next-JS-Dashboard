import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/products/products.module.css'

import Image from 'next/image';
import Link from 'next/link';
import { fetchProduct } from '@/app/lib/data';

async function ProductsPage({searchParams}) {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const {product, totalCount} = await fetchProduct(q,page);

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
            <th>Price</th>
            <th>Created At</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((product)=>(
              <tr>
              <td className={styles.user}>
                <Image src={product?.image ? product?.image : '/noproduct.jpg'} height={40} width={40} alt='User' className={styles.productImage} />
                {product?.title}
              </td>
              
              <td>${product?.price}</td>
              <td>{product?.createdAt?.toString().slice(4,16)}</td>
              <td>{product?.stock}</td>
              <td className={styles.buttons}>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <Link href={'/'}>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </Link>
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>

      <Pagination count={totalCount} />
    </div>
  );
}

export default ProductsPage;