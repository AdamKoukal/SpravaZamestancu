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

        const user= await prisma.users.findUnique({
        where: 
        {
          email: credentials.email,
        },
        });

        if(credentials?.email==user?.email&&credentials?.password==user?.password)
        {
          return user;
        }
        else
        {
          return null;
        }
      }
    })

  ],

  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
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