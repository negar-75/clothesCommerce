import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const client = await MongoClient.connect(
          "mongodb+srv://nasirinegar:AjxC9qQSf8ybeDOv@cluster0.60qjwcn.mongodb.net/users?retryWrites=true&w=majority"
        );

        try {
          const db = client.db();
          const user = await db.collection("accounts").findOne({
            email: credentials.email,
            password: credentials.password,
          });
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (err) {
          console.log(err);
          return null;
        } finally {
          client.close();
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
