import { ReactNode, useEffect } from 'react';

type Props = {
  open: boolean;
  children?: ReactNode;
  onHide: () => void;
};

export const Modal = ({ open, children, onHide }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}>
      <div className='fixed inset-0 bg-black/50' onClick={onHide}></div>

      <div className='absolute inset-x-6 max-w-screen-sm mx-auto inset-y-52 md:inset-y-24'>
        <div className='h-full bg-zeus rounded-2xl shadow-lg p-5 md:p-10'>
          {children}
        </div>
      </div>
    </div>
  );
};
