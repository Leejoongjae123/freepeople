import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google'


export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: '77a712f923a8b52b394d',
    //   clientSecret: '593386f3e8b3488145341ff6366864ae027e95f3',
    // }),
    NaverProvider({
      clientId: 'som7cf8GuPI4eHpxrIlG',
      clientSecret: 'yxzOoA6hPN',
    }),
    // GoogleProvider({
    //   clientId: '804419313012-91e5et127ghf00q0v3pip4fqrst0jhpl.apps.googleusercontent.com',
    //   clientSecret: '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',
    // }),
  ],
  secret:'qwerty1234'
};
export default NextAuth(authOptions); 