import Image from "next/image";
import styles from '@/app/components/dashboard/users/singleUser.module.css'
const SingleUserPage = async ({ params }) => {
  
  const { id } = params;
  

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/avatar.jpg"} alt="" fill />
        </div>
        Username Here
      </div>
      <div className={styles.formContainer}>
        <form action={''} className={styles.form}>
          <input type="hidden" name="id" value={id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder='username' />
          <label>Email</label>
          <input type="email" name="email" placeholder='email' />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder='phone' />
          <label>Address</label>
          <textarea type="text" name="address" placeholder='address' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;