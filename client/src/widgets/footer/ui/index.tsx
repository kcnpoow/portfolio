import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';

import { Logo } from '@shared/ui/Logo';

export const Footer = () => {
  return (
    <footer className='py-8'>
      <div className='flex justify-between items-center container mx-auto px-4'>
        <Logo />

        <ul className='flex gap-x-4'>
          <li>
            <a href='#'>
              <BsFacebook className='text-2xl sm:text-4xl' />
            </a>
          </li>
          <li>
            <a href='#'>
              <BsInstagram className='text-2xl sm:text-4xl' />
            </a>
          </li>
          <li>
            <a href='#'>
              <BsGithub className='text-2xl sm:text-4xl' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
