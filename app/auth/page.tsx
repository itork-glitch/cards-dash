import React from 'react';
import { LoginForm } from '@/components';

export const metadata = {
  title: 'Login',
};

const page = () => {
  return (
    <section className='flex justify-center items-center h-[100vh] w-[100vw] bg-slate-200'>
      <LoginForm />
    </section>
  );
};

export default page;
