import Pagination from '@/app/components/dashboard/pagination/pagination';
import Search from '@/app/components/dashboard/search/search';
import styles from '@/app/components/dashboard/users/users.module.css'
import { fetchUser } from '@/app/lib/data';

import Image from 'next/image';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteUser } from '@/app/lib/action';


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
              <AlertDialog>
                <AlertDialogTrigger className={`${styles.delete} ${styles.button}`}>Delete</AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className={styles.popupTitle}>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your account
                      and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className={styles.buttonWrapper}>
                    <AlertDialogCancel className={styles.popUpCancle}>Cancel</AlertDialogCancel>
                    
                    <form action={deleteUser}>
                      <input type="text" name='id' value={user.id} hidden />
                      <button type='submit' className={`${styles.button} ${styles.delete}`}>Delete</button>
                    </form>
                    
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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