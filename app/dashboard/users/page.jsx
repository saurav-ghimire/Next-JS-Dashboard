import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/users/users.module.css'
import { fetchUser } from '@/app/lib/data';

import Image from 'next/image';
import Link from 'next/link';

async function UsersPage({searchParams}) {
  
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const {users, totalCount} = await fetchUser(q,page);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <Search placeholder={'Search for a user'} />
          <Link href={'/dashboard/users/add'}>
          <button className={styles.addButton}>Add New</button>
          </Link>
      </div>
      {
            users.length < 1 ? 'No users' : ''
          }
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
          
          {
            users.map(user=>(
          <tr key={user?.id}>
            <td className={styles.user}>
              <Image src={user?.image ? user?.image : '/avatar.jpg'} height={40} width={40} alt='User' className={styles.userImage} />
              {user?.username}
            </td>
            <td>{user?.email}</td>
            <td>{user?.createdAt?.toString().slice(4,16)}</td>
            <td>{user?.isAdmin ? 'Admin' : 'Client'}</td>
            <td>{user?.isActive ? 'Active' : 'False'}</td>
            <td className={styles.buttons}>
              <Link href={`/dashboard/users/${user?.id}`}>
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

export default UsersPage;