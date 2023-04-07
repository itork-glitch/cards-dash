'use client';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/auth/succes');
    }
  });

  return (
    <div className='h-[65vh] w-[50vw] flex justify-around flex-row flex-wrap bg-slate-50 rounded-md shadow-[0_5px_10px_0_rgba(0,0,0,.1);]'>
      <h1 className='w-full h-[calc(22vh-20px)] text-center pt-5 font-semibold text-xl'>
        Login to explore
      </h1>
      <div className='h-[22vh] flex justify-center  text-center flex-row flex-wrap'>
        <div className='border border-slate-300 w-[350px] rounded-md flex gap-1 justify-center items-center mb-1 cursor-not-allowed btn-email'>
          <div className='tooltip flex gap-1 justify-center items-center'>
            <MdAlternateEmail />
            Zaloguj się email
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            className='border border-slate-300 py-2 w-[350px] rounded-md flex gap-1 justify-center items-center'
            onClick={() => signIn('google')}
          >
            <FcGoogle size={25} /> Zaloguj się przez Google
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            className='border border-slate-300 py-2 w-[350px] rounded-md flex gap-1 justify-center items-center'
            onClick={() => signIn('github')}
          >
            <FaGithub size={25} /> Zaloguj się przez Github
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            className='border border-slate-300 py-2 w-[350px] rounded-md flex gap-1 justify-center items-center'
            onClick={() => signIn('discord')}
          >
            <FaDiscord size={25} />
            Zaloguj się przez Discord
          </button>
        </div>
      </div>
      <div className='flex justify-center items-end pb-3 h-[calc(22vh-12px)]'>
        <p>
          Jak to działa?&nbsp;
          <Link className='text-indigo-500' href={'/docs'}>
            Sprawdź
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
