import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={`p-2 rounded-full hover:bg-white/10 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
