import { useForm } from 'react-hook-form';
import { FormData } from '@/types/Form';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EventForm } from '@/features/EventForm/EventForm';
import { Button } from '@/components/Elements/Button';
import { DisplayEvent } from '@/features/EventDisplay/DisplayEvent';

const CreatePage = () => {
  const { handleSubmit, register } = useForm<FormData>();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [form, setForm] = useState<FormData | undefined>();
  const navigate = useNavigate();

  const confirmForm = (data: FormData) => {
    setForm(data);
    setIsConfirmed(true);
  };

  const submitForm = () => {
    navigate('/event', { state: form });
  };

  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
      {(isConfirmed && (
        <DisplayEvent {...form}>
          {' '}
          <Button
            buttonType='danger'
            className='p-1 text-sm'
            onClick={() => setIsConfirmed(false)}
          >
            Edit
          </Button>
          <Button
            buttonType='light'
            className='p-1 mx-12 text-sm'
            onClick={submitForm}
          >
            Confirm
          </Button>{' '}
        </DisplayEvent>
      )) || (
        <EventForm
          handleSubmit={handleSubmit}
          register={register}
          confirmForm={confirmForm}
        >
          <Button
            buttonType='danger'
            buttonSize='sm'
            className='mt-10 text-left'
          >
            <Link to='/'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                className='inline m-1'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />{' '}
                <path d='M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1' />{' '}
              </svg>
              Go back
            </Link>
          </Button>
        </EventForm>
      )}
    </div>
  );
};

export default CreatePage;
