import { 
  MdDashboard, 
  MdSupervisedUserCircle, 
  MdShoppingBag, 
  MdAttachMoney, 
  MdSettings, 
  MdHelp, 
  MdPeople, 
  MdLogout
} from "react-icons/md";

import styles from './sidebar.module.css'
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { auth, signOut } from "@/app/authprovider";

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      }
    ]
  },
  {
    title: 'Users',
    list: [
      {
        title: 'users',
        path: '/dashboard/users',
        icon: <MdPeople />
      },
      {
        title: 'settings',
        path: '/dashboard/settings',
        icon: <MdSettings />
      },
      {
        title: 'help',
        path: '/dashboard/help',
        icon: <MdHelp />
      }
    ]
  },
  {
    title: 'Transactions',
    list: [
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      }
    ]
  }
];

async function Sidebar() {
  const {user} = await auth();
  
  return ( 
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/avatar.jpg" alt="" height="50" width="50" className={styles.userImage} />
        <div className={styles.userDetail}>
            <span className={styles.userName}>{user.username}</span>
            <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menuItems.map(cat=>(
            <li key={cat.title}>
              <span className={styles.cat}>{cat.title}</span>
              {
                cat.list.map(items=>(
                  <MenuLink items={items} key={items.title} />
                ))
              }
            </li>   
          ))
        }
      </ul>
      <form action={async() => {
        "use server"
        await signOut();
      }}>
          <button type='submit' className={styles.logout}><MdLogout/> Logout</button>
      </form>
    </div>
   );
}

export default Sidebar;