import { TextareaHTMLAttributes } from 'react';

type Props = {
  label: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ label, value, ...props }: Props) => {
  const isNotEmpty = value && value.toString().trim() !== '';

  return (
    <div className='group relative'>
      <label
        className={`block transition-all pointer-events-none group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
          isNotEmpty ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-50'
        }`}
      >
        {label}
      </label>
      <textarea
        className='w-full bg-transparent border-b-2 py-2 focus-within:outline-none'
        value={value}
        {...props}
      />
    </div>
  );
};
