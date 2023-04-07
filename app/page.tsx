import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Navbar, Hero } from '@/components';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className={`bg-white h-[126vh] md:h-[100vh]`}>
      <Navbar />
      <Hero />
    </main>
  );
}
