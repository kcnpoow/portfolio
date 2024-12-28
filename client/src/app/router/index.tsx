import { Routes, Route } from 'react-router';

import { PrivateRoute } from './PrivateRoute';
import { Layout } from '@app/layout';
import { Portfolio } from '@pages/portfolio';
import { Admin } from '@pages/admin';
import { CreateProject } from '@pages/create-project';
import { EditProject } from '@pages/edit-project';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Portfolio />} />
      </Route>

      <Route path='admin' element={<PrivateRoute />}>
        <Route index element={<Admin />} />
        <Route path='create' element={<CreateProject />} />
        <Route path='edit' element={<EditProject />} />
      </Route>
    </Routes>
  );
};
