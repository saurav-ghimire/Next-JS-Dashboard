import styles from '@/app/components/login/login.module.css'
import { authenticate } from './lib/action';

export default function Home() {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        
      </form>
    </div>
  );
}
