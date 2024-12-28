import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '@shared/config/firebase';

export const login = async () => {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider);
};
