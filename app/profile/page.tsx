import React from 'react';
import { Profile, ProfileOverlay } from '@/components';

export const metadata = {
  title: 'profile',
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
