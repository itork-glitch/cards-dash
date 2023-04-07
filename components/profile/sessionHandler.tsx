'use client';

import { useSession } from 'next-auth/react';
import UserProfile from './profile';
import NotSession from './notSession';

const Profile = () => {
  const { data: session } = useSession();

  if (session) {
    return <UserProfile />;
  } else {
    return <NotSession />;
  }
};

export default Profile;
