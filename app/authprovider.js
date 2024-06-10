import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authconfig } from "./authconfig"
import connectDB from "./lib/utils"
import { User } from "./lib/models"
const bcrypt = require('bcrypt');

const login = async (credentials) => {
  
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authconfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log('user',user)
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
})