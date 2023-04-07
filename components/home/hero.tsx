import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className=' flex justify-center h-[120vh] md:h-[94vh] w-[90%] lg:w-[75%] 2xl:w-[60%]'>
        <div className='grid md:grid-cols-2 md:grid-rows-2 w-full md:gap-16 gap-10 grid-cols-1 grid-rows-4 p-5 md:p-10 lg:p-20'>
          <Link href='/examples'>
            <div className='bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 w-full h-full rounded-2xl flex flex-col justify-end items-left hover:opacity-90 transition-all duration-150'>
              <h1 className='text-2xl font-bold text-[22px] text-slate-50 pb-1 pl-5 tracking-[.04em]'>
                Przykłady
              </h1>
              <p className='pb-5 pl-5 text-slate-50 text-sm'>
                Zobacz jak może wyglądać twoja karta profilowa.
              </p>
            </div>
          </Link>
          <Link href='/docs'>
            <div className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 w-full h-full rounded-2xl flex flex-col justify-end items-left hover:opacity-90 transition-all duration-150'>
              <h1 className='text-2xl font-bold text-[22px] text-slate-50 pb-1 pl-5 tracking-[.04em]'>
                Poradnik
              </h1>
              <p className='pb-5 pl-5 text-slate-50 text-sm'>
                Zobacz jak tworzyć własne karty profilowe.
              </p>
            </div>
          </Link>
          <Link href='/auth'>
            <div className='bg-gradient-to-br from-sky-400 to-indigo-900 w-full h-full rounded-2xl flex flex-col justify-end items-left hover:opacity-90 transition-all duration-150'>
              <h1 className='text-2xl font-bold text-[22px] text-slate-50 pb-1 pl-5 tracking-[.04em]'>
                Zaloguj się
              </h1>
              <p className='pb-5 pl-5 text-slate-50 text-sm'>
                Zaloguj się na swoje konto
              </p>
            </div>
          </Link>
          <Link href='/profile'>
            <div className='bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-lime-500 via-teal-500 to-violet-500 w-full h-full rounded-2xl flex flex-col justify-end items-left hover:opacity-90 transition-all duration-150'>
              <h1 className='text-2xl font-bold text-[22px] text-slate-50 pb-1 pl-5 tracking-[.04em]'>
                Profil
              </h1>
              <p className='pb-5 pl-5 text-slate-50 text-sm'>
                Wyświetl swój profil
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
