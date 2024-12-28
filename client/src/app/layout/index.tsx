import { Outlet } from 'react-router';

import { Header } from '@widgets/header';
import { Footer } from '@widgets/footer';

export const Layout = () => {
  return (
    <>
      <Header />

      <main className='container mx-auto px-4'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
