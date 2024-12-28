import { createContext, ReactNode, useState } from 'react';

import type { Alert, AlertAdd } from '@shared/types/alert';

export type AlertContextValue = {
  alerts: Alert[];
  addAlert: (alert: AlertAdd) => void;
};

type Props = { children: ReactNode };

export const AlertContext = createContext<AlertContextValue | null>(null);

export const AlertProvider = ({ children }: Props) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const dismissAlert = (_id: string) => {
    setAlerts((prevState) => prevState.filter((alert) => alert._id !== _id));
  };

  const addAlert = ({ message, severity, timeout }: AlertAdd) => {
    const _id =
      Math.random().toString(36).slice(2, 9) +
      new Date().getTime().toString(36);

    const alert: Alert = {
      _id,
      message,
      severity,
      timeout,
      onDismiss: dismissAlert,
    };

    setTimeout(() => {
      dismissAlert(_id);
    }, timeout);

    setAlerts((prevState) => [...prevState, alert]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
