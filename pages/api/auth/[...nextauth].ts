import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
    GithubProvider({
      clientId: `${process.env.GITHUB_CLIENT}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
    DiscordProvider({
      clientId: `${process.env.DISCORD_CLIENT}`,
      clientSecret: `${process.env.DISCORD_SECRET}`,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.JWT_SECRET,
});
