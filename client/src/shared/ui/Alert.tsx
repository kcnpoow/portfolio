import { CgClose } from 'react-icons/cg';

import { Alert as AlertType } from '@shared/types/alert';

type Props = { alert: AlertType };

export const Alert = ({ alert }: Props) => {
  return (
    <div className='w-full p-4 bg-red-500 rounded-xl'>
      <button className='ml-auto block' onClick={() => alert.onDismiss(alert._id)}>
        <CgClose />
      </button>
      <div>{alert.message}</div>
    </div>
  );
};
