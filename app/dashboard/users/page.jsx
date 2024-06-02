import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/users/users.module.css'

import Image from 'next/image';
import Link from 'next/link';

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <Search placeholder={'Search for a user'} />
          <Link href={'/dashboard/users/add'}>
          <button className={styles.addButton}>Add New</button>
          </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image src={'/avatar.jpg'} height={40} width={40} alt='User/' className={styles.userImage} />
              John DOe
            </td>
            <td>john@gmail.com</td>
            <td>06.02.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td className={styles.buttons}>
              <Link href={'/dashboard/users/123'}>
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

export default UsersPage;