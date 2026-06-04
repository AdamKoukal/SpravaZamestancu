import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./models/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  
  providers: [

    Credentials({
      credentials:{
        email:{},
        password:{}
      },
      authorize:async (credentials)=>{
        const bcrypt:any = require('bcrypt');
        const user= await prisma.users.findUnique({
        where: 
        {
          email: credentials?.email?.toString(),
        },
        });
        
        if(credentials?.email==user?.email)
        {
          if(await bcrypt.compare(credentials?.password, user?.password)){
            return user;
          }

          return null;
        }
        else
        {
          return null;
        }
      }
    })

  ],

  callbacks: {
  async jwt({ token, user }:any) {
    if (user) {
      token.id = user.id
      token.position = user.position
      token.profile_picture = user.profile_picture
    }
    return token
  },
  async session({ session, token }:any) {
    if (session.user&&token.id) {
      session.user.id = token.id.toString();
      session.user.position=token.position;
      session.user.profile_picture=token.profile_picture;
    }
    return session
  },
  authorized: async ({ auth }) => {
    return !!auth
  },
  },
  session:{
    strategy:"jwt"
  },
  pages:{
    signIn:"/login",
  }
})