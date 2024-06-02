import Image from "next/image";
import styles from '@/app/components/dashboard/products/singleProduct.module.css'
const SingleProductPage = async ({ params }) => {
  
  const { id } = params;
  

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/avatar.jpg"} alt="" fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={''} className={styles.form}>
        <input type="hidden" name="id" value={''} />
          <label>Title</label>
          <input type="text" name="title" placeholder={''} />
          <label>Price</label>
          <input type="number" name="price" placeholder={''} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={''} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={'' || "color"}
          />
          <label>Size</label>
          <input type="number" name="size" placeholder={''} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={''}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;