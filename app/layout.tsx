import { Inter } from 'next/font/google';
import './globals.css';
import Provider from './providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`${inter.className}text-black`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
