import { signOut } from 'firebase/auth';
import { IoMdExit } from 'react-icons/io';

import { login } from '../lib';
import { IconButton } from '@shared/ui/IconButton';
import { useAuth } from '@shared/hooks/useAuth';
import { auth } from '@shared/config/firebase';

export const UserMenu = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  if (user) {
    return (
      <>
        <IconButton className='max-sm:hidden' onClick={handleLogout}>
          <IoMdExit size={25} />
        </IconButton>

        <button className='underline sm:hidden' onClick={handleLogout}>
          Sign Out
        </button>
      </>
    );
  }

  return (
    <button className='underline' onClick={login}>
      Sign In
    </button>
  );
};
