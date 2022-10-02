import { Form } from '@/components/Elements/Form';
import { Input } from '@/components/Elements/Input';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { FormData } from '@/types/Form';
import { Button } from '@/components/Elements/Button';
import { ReactNode } from 'react';

type FormProps = {
  handleSubmit: UseFormHandleSubmit<FormData>;
  register: UseFormRegister<FormData>;
  confirmForm: (a: FormData) => void;
  children?: ReactNode;
};

const InputTitle = ({ title }: { title: string }) => (
  <span className='bg-alertWarningLight/50 w-full text-center rounded-t-lg p-2'>
    <b>{title}</b>
  </span>
);

export const EventForm = ({
  handleSubmit,
  register,
  confirmForm,
  children,
}: FormProps) => {
  return (
    <>
      <span>{children}</span>
      <Form onSubmit={handleSubmit(confirmForm)}>
        <InputTitle title='Event Name' />
        <Input
          className='mb-8'
          required
          placeholder='Event Name'
          {...register('eventName')}
        />

        <InputTitle title='Host name' />
        <Input
          className='mb-8'
          required
          placeholder='Name of Host'
          {...register('hostName')}
        />

        <InputTitle title='Location' />
        <Input
          className='mb-8'
          required
          placeholder='Name of Host'
          {...register('location')}
        />

        <InputTitle title='Start time' />
        <Input
          className='mb-8'
          type={'datetime-local'}
          {...register('start')}
        />

        <InputTitle title='End Time' />
        <Input className='mb-8' type={'datetime-local'} {...register('end')} />

        <InputTitle title='Photo' />
        <Input type='file' placeholder='file' {...register('photo')} />
        <Button type='submit' className='mt-10'>
          Send
        </Button>
      </Form>
    </>
  );
};
