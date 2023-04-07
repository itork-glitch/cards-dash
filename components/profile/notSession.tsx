import Link from 'next/link';
import React from 'react';

const NotSession = () => {
  return (
    <section>
      <h1>Nie jesteś zalogowany</h1>
      <p>
        Zaloguj się teraz <Link href={'/auth'}>Zaloguj</Link>
      </p>
    </section>
  );
};

export default NotSession;
