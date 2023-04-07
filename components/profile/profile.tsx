/* eslint-disable @next/next/no-img-element */
'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>
        {session?.user?.email}
        <img src={`${session?.user?.image}`} alt='Profile' />
      </h1>
    </div>
  );
};

export default UserProfile;
