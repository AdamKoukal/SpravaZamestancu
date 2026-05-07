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
          email: credentials?.email?.toString(),
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
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id
      token.position = user.position
    }
    return token
  },
  async session({ session, token }) {
    if (session.user&&token.id) {
      session.user.id = token.id.toString();
      session.user.position=token.position;
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