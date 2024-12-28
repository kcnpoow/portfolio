import { InputHTMLAttributes } from 'react';

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, value, className, ...props }: Props) => {
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
      <input
        className={`w-full bg-transparent border-b-2 py-2 focus-within:outline-none ${className}`}
        value={value}
        {...props}
      />
    </div>
  );
};
