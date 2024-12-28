import { useEffect } from 'react';

import { Router } from './router';
import { socket } from '@shared/config/socket';
import { Loader } from '@shared/ui/Loader';
import { useAuth } from '@shared/hooks/useAuth';
import { useAlert } from '@shared/hooks/useAlert';
import { Alert } from '@shared/ui/Alert';

import './styles/global.css';

export const App = () => {
  const { alerts } = useAlert();
  const { isAuthenticating } = useAuth();

  useEffect(() => {

    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  if (isAuthenticating) {
    return <Loader />;
  }

  return (
    <>
      <div className='w-64 max-w-full fixed bottom-0 right-4 z-50'>
        <ul>
          {alerts.map((alert) => (
            <li key={alert._id} className='my-4'>
              <Alert alert={alert} />
            </li>
          ))}
        </ul>
      </div>

      <Router />
    </>
  );
};
