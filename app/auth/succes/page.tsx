/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0 && session) {
      router.push('/profile');
    }
  }, [countdown, router, session]);

  if (session) {
    return (
      <section className='h-[100vh] w-full bg-gray-700 flex justify-center text-center text-white'>
        <div className='mt-5 bg-slate-900/50 h-[15vh] rounded-xl w-[50%] flex flex-row flex-wrap justify-center'>
          <h1 className='text-center font-semibold text-xl flex items-center gap-1'>
            <AiFillCheckCircle />
            Hej {session?.user?.name}
          </h1>
          <p className='w-full text-slate-300 flex items-center justify-center'>
            Za {countdown} sekund zostaniesz przekierowany na swój profil
          </p>
          <Link
            href={'/profile'}
            className='text-slate-300 flex items-center justify-center pb-2 '
          >
            <span className='border border-slate-600 rounded-md px-6 py-2 hover:px-8 transition-all'>
              Przejdz teraz
            </span>
          </Link>
        </div>
      </section>
    );
  } else {
    router.push('/auth');
    return null;
  }
};

export default Page;
