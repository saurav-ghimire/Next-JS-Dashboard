import { revalidatePath } from "next/cache";
import { Product, User } from "./models";

import connectDB from "./utils";
import { redirect } from "next/navigation";
const bcrypt = require('bcrypt');


export const addUser = async(formData) => {
  "use server"

  const {username,email,password,phone,isAdmin,isActive,address} = Object.fromEntries(formData);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt)
    connectDB();
      const newUser = new  User({
        username,
        email,
        password : hashedPass,
        phone,
        isAdmin,
        isActive,
        address
      });
      await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error('Error while adding user', error)
  }
  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}


export const addProduct = async(formData) => {
  "use server"
  const {title, cat, price,category, stock, color, size, desc} = Object.fromEntries(formData);
  try {
    
    connectDB();
      const newProduct = new  Product({
        title, cat, price, stock, color, size, desc, category
      });
      await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error('Error while adding Product', error)
  }
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export const deleteProduct = async (formData) => {
  'use server'
  const {id} = Object.fromEntries(formData);

  try {
    connectDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('error', err);
  }
  revalidatePath('/dashboard/products');
};


export const deleteUser = async (formData) => {
  'use server'
  const {id} = Object.fromEntries(formData);

  try {
    connectDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error('error', err);
  }
  revalidatePath('/dashboard/users');
};