import { Navigate, Outlet } from 'react-router';

import { useAuth } from '@shared/hooks/useAuth';

export const PrivateRoute = () => {
  const { user } = useAuth();

  if (user?.email !== 'kcnpoow@gmail.com') {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
