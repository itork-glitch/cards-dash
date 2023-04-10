'use client';
import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import image from '@/public/next.svg';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <section>
      <nav className='md:flex justify-between h-[6vh] items-center hidden shadow-[0_2px_4px_0_rgba(0,0,0,.2);]'>
        <div className='pl-5 flex gap-5'>
          <Image src={image} alt='nav' height={70} width={70} />
          <ul className='flex list-none gap-5'>
            <li>
              <Link href={'/docs'}>Docs</Link>
            </li>
            <li>
              <Link href={'/example'}>Example</Link>
            </li>
            <li>
              <Link href={'/create'}>Create</Link>
            </li>
          </ul>
        </div>
        <div className='pr-5'>
          <ul className='flex list-none gap-5'>
            <li>
              <Link href={'/profile'}>Profil</Link>
            </li>
            <li>
              {session ? (
                <button onClick={() => signOut()}>Wyloguj się</button>
              ) : (
                <Link href={'/auth'}>Zaloguj się</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <nav className='flex md:hidden h-[6vh] justify-between items-center px-5'>
        <Image src={image} alt='nav' height={70} width={70} />
        <Hamburger direction='left' toggled={open} toggle={setOpen} />
        {open ? (
          <>
            <div className='absolute mt-[7vh] p-3 rounded-lg bg-slate-300/40 backdrop-blur shadow-[0px_0px_9px_1px_#00000024] right-[3vh] top-1 list-none'>
              <a href='' className='separator'>
                <li>Strona Główna</li>
              </a>
              <a href='' className='separator'>
                <li>Docs</li>
              </a>
              <a href='' className='separator'>
                <li>Profil</li>
              </a>
              <a href=''>
                <li>Stwórz</li>
              </a>
            </div>
          </>
        ) : (
          <></>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
