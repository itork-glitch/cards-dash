import Link from 'next/link';
import React from 'react';

const NotSession = () => {
  return (
    <section>
      <div className='flex flex-col h-[calc(94vh-400px)] justify-between items-center'>
        <div className='h-[calc(100%/3)]'>
          <h1 className=' text-4xl font-bold pt-7'>Nie jesteś zalogowany!</h1>
          <p className='text-center pt-4 font-medium text-xl'>
            Zaloguj się teraz:&nbsp;
            <Link
              href={'/auth'}
              className=' text-indigo-600 hover:text-indigo-800 transition-colors'
            >
              Zaloguj
            </Link>
          </p>
        </div>

        <span className='h-[calc(100%/3)] text-center flex items-end justify-center pb-3'>
          Dowiedz się wiecej o Fast Login:&nbsp;
          <Link
            href={'/docs/fast-login'}
            className=' text-indigo-600 hover:text-indigo-800 transition-colors'
          >
            Dokumentacja
          </Link>
        </span>
      </div>
    </section>
  );
};

export default NotSession;
