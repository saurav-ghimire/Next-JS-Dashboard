"use client"
import Link from "next/link";
import styles from './menuLink.module.css'
import { usePathname } from "next/navigation";

function MenuLink({items}) {
  const pathName = usePathname();
  return ( 
  <Link href={items.path} className={`${styles.container} ${pathName == items.path ? styles.active : ''}`  }>
    {items.icon}
    { items.title}
  </Link>
);
}

export default MenuLink;