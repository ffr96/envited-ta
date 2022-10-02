import { FormData } from '@/types/Form';
import { ReactNode } from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import birthdayCake from '@/assets/birthday-cake.png';

type EventDetails = Partial<Omit<FormData, 'photo'>> & {
  children?: ReactNode;
};

export const DisplayEvent = ({ children, ...event }: EventDetails) => {
  let start;
  let end;

  /**
   * Make sure dates are of the correct type.
   */
  if (typeof event.start === 'string') {
    start = new Date(event.start);
  }
  if (typeof event.end === 'string') {
    end = new Date(event.end);
  }

  console.log(start);

  return (
    <div>
      {children}
      <div
        className='flex flex-col lg:flex-row justify-center text-4xl
      items-center text-textMain font-helvetica mt-10'
        id={`event-display`}
      >
        <div className='flex flex-col font-bold lg:mr-10'>
          <h1>
            {event.eventName}
            <br></br>{' '}
            <span className='text-lg font-light text-textSub'>
              Hosted by <b className='font-bold'>{event.hostName}</b>
            </span>
          </h1>
          <div className='text-lg flex flex-row items-center mb-5'>
            <BsCalendarDate className='mr-3' />
            <div>
              <div>{start?.toDateString()}</div>
              <div className='text-textSub'>
                <span className='font-light'>to</span> {end?.toDateString()}
              </div>
            </div>
          </div>
          <div className='text-lg flex items-center'>
            <GoLocation className='mr-3' /> {event.location}
          </div>
        </div>
        <img src={birthdayCake} width={500} />
      </div>
    </div>
  );
};
