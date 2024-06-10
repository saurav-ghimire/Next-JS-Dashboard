"use client"
import styles from '@/app/components/login/login.module.css'
import { authenticate } from '@/app/lib/action';
import { useState } from "react"; 


export default function LoginForm() {
  const [err, setErr]= useState();
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error)
  }

  return (
    <div className={styles.container}>
      <form action={''} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {err && err}
      </form>
    </div>
  );
}
