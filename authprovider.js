import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authconfig } from "./authconfig"
import connectDB from "./app/lib/utils"
import { User } from "./app/lib/models"
const bcrypt = require('bcrypt');
const login = async(credentials) => {
 try {
  connectDB();
  const user = await User.findOne({username:credentials.username})
  if(!user){
    throw new Error('Wrong Credentials');
  }

  const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
  if(!isPasswordCorrect) {
    throw new Error('Wrong Password');
  }
  return user;
 } catch (error) {
  console.log(error)
  throw new Error('Error', error);
 } 
}

export const { signIn, signOut, auth } = NextAuth({
  ...authconfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ request }) {
        try {
          const user = await login(request)
          return user;
        } catch (error) {
          return null;
        }
        // const response = await fetch(request)
        // if (!response.ok) return null
        // return (await response.json()) ?? null
      },
    }),
  ],
})