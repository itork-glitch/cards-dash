import React from 'react';
import { Profile, ProfileOverlay } from '@/components';

export const metadata = {
  title: 'Profile Cards | Profile',
};

const page = () => {
  return (
    <main>
      <ProfileOverlay>
        <Profile />
      </ProfileOverlay>
    </main>
  );
};

export default page;
