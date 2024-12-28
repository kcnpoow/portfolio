import { HTMLAttributes } from 'react';

type Props = {
  open: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const BurgerMenu = ({ open, ...props }: Props) => {
  return (
    <button {...props}>
      <span
        className={`block w-7 h-1 mb-2 bg-white rounded-sm transition-transform ${
          open ? 'translate-y-3 -rotate-45' : 'rotate-0'
        }`}
      ></span>
      <span
        className={`block w-7 h-1 mb-2 bg-white rounded-sm transition-opacity ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`block w-7 h-1 bg-white rounded-sm transition-transform ${
          open ? '-translate-y-3 rotate-45' : 'rotate-0'
        }`}
      ></span>
    </button>
  );
};
