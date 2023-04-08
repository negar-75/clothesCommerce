import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
      async authorize(credentials, req) {
        console.log(credentials);
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };
        console.log("I am working");
        // const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signin`, {
        //   method: "POST",
        //   body: JSON.stringify(payload),
        //   headers: { "Content-Type": "application/json" },
        // });

        const user = { email: "test1@test1.com", password: "123456" };
        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          return user;
        } else return null;
        // if (res.ok && user) {
        //   return user;
        // }

        // return null;
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
