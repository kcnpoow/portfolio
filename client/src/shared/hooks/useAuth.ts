import { useContext } from 'react';

import { AuthContext, AuthContextValue } from '@app/providers/AuthContext';

export const useAuth = () => {
  const context = useContext<AuthContextValue | null>(AuthContext);

  if (!context) {
    throw new Error('useAuth should be used within AuthProvider');
  }

  return context;
};
