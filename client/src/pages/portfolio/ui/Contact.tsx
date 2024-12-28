import { ChangeEvent, FormEvent, useState } from 'react';

import { CommentApi } from '@entities/comment';
import { SectionHeader } from '@shared/ui/SectionHeader';
import { Input } from '@shared/ui/Input';
import { Textarea } from '@shared/ui/Textarea';
import { useAlert } from '@shared/hooks/useAlert';

const initialFormData = { name: '', email: '', message: '' };

export const Contact = () => {
  const { addAlert } = useAlert();

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message || !formData.name) {
      setError('All fields need to be filled');
      return;
    }

    try {
      await CommentApi.sendFeedback(formData);

      setFormData(initialFormData);
    } catch (e) {
      addAlert({
        message: 'Something went wrong',
        severity: 'error',
        timeout: 3000,
      });
    }
  };

  return (
    <section className='relative my-24'>
      <div className='absolute -top-32' id='contact'></div>

      <SectionHeader title='contact me' />

      <p className='mb-16 text-lg sm:w-3/4 sm:mx-auto md:text-xl lg:text-2xl/10'>
        I would love to hear about your project and how I can help. Please fill
        in the form, and I’ll get back to you as soon as possible.
      </p>

      <form
        className='flex flex-col gap-y-12 sm:w-8/12 sm:mx-auto sm:gap-y-16'
        action='post'
        onSubmit={handleSubmit}
      >
        <Input
          label='NAME'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          name='email'
          label='EMAIL'
          type='text'
          value={formData.email}
          onChange={handleChange}
        />

        <Textarea
          name='message'
          label='MESSAGE'
          rows={5}
          value={formData.message}
          onChange={handleChange}
        />

        {error && (
          <div className='text-red-100 bg-red-700 p-5 text-center rounded-lg'>
            {error}
          </div>
        )}

        <button
          className='mx-auto py-4 px-6 border-b-2 border-casper hover:bg-black/25 transition-colors'
          type='submit'
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};
