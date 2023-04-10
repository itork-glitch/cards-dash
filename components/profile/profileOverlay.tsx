import React from 'react';
import Navbar from '../home/navbar';
import Image from 'next/image';
import photo from '@/public/mountain.jpg';

interface ProfileProps {
  children: React.ReactNode;
}

const ProfileOverlay = ({ children }: ProfileProps) => {
  return (
    <section className='h-[100vh] bg-slate-200'>
      <Navbar />
      <div className='h-[94vh] w-[100vw]'>
        <div className='relative h-[400px]'>
          <Image
            src={photo}
            alt='Banner'
            className='object-cover w-full h-full'
          />
        </div>
        {children}
      </div>
    </section>
  );
};

export default ProfileOverlay;
