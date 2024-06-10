import NextAuth from 'next-auth';
import { authconfig } from './app/authconfig';

 
export default NextAuth(authconfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};