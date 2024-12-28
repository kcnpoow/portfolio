import { useContext } from 'react';

import { AlertContextValue, AlertContext } from '@app/providers/AlertContext';

export const useAlert = () => {
  const context = useContext<AlertContextValue | null>(AlertContext);

  if (!context) {
    throw new Error('useAlert should be used within AlertProvider');
  }

  return context;
};
