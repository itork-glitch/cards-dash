/* eslint-disable @next/next/no-img-element */
'use client';

import { useSession } from 'next-auth/react';
import { MdAlternateEmail } from 'react-icons/md';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
  const { data: session } = useSession();

  let imageUrl = session?.user?.image;

  if (imageUrl?.includes('lh3') || imageUrl?.startsWith('https://lh3')) {
    imageUrl = imageUrl.slice(0, -5) + 's300-c';
  } else if (imageUrl?.includes('cdn') || imageUrl?.startsWith('https://cdn')) {
    imageUrl += '?size=300';
  }

  return (
    <div>
      <div className='relative bg-slate-50'>
        <Image
          src={`${imageUrl}`}
          alt='avatar'
          width={300}
          height={300}
          className='rounded-full border-[7px] border-slate-100 absolute top-[-10vh] right-[70vw] left-[5vw] -z-0'
        />
        <div className='ml-[calc(5vw+300px+1vw)]'>
          <h1 className='font-bold text-6xl py-6'>{session?.user?.name}</h1>
          <p className='text-slate-600 flex items-center gap-1 pb-4'>
            <MdAlternateEmail />
            {session?.user?.email}
          </p>
        </div>
      </div>
      <div className='bg-slate-100 h-[calc(100vh-6vh-400px-148px)]'>
        <h1 className='pt-16 pl-12 font-bold text-4xl'>Twoje karty:</h1>
      </div>
    </div>
  );
};

export default UserProfile;
