import { useState } from 'react';

import { UserMenu } from '@entities/user';
import { Logo } from '@shared/ui/Logo';
import { BurgerMenu } from '@shared/ui/BurgerMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='sticky top-0 flex justify-center items-center z-50'>
      <div className='flex items-center justify-between container h-20 mx-auto px-4 bg-zeus max-sm:z-50'>
        <Logo />

        <BurgerMenu
          className='sm:hidden'
          open={isMenuOpen}
          onClick={toggleMenu}
        />

        <div className='hidden sm:block'>
          <UserMenu />
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute bg-zeus max-sm:left-0 max-sm:right-0 max-sm:bottom-0 max-sm:py-4 max-sm:transition-transform ${
          isMenuOpen ? 'max-sm:translate-y-full' : 'max-sm:translate-y-0'
        }`}
      >
        <nav>
          <ul className='flex flex-col gap-y-4 text-xl max-sm:text-center sm:flex-row sm:gap-x-10'>
            <li>
              <a
                className='sm:underline-offset-8 sm:hover:underline '
                href='#home'
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='sm:underline-offset-8 sm:hover:underline '
                href='#about'
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                className='sm:underline-offset-8 sm:hover:underline '
                href='#work'
                onClick={closeMenu}
              >
                Work
              </a>
            </li>
            <li className='sm:hidden'>
              <UserMenu />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
