import { Link } from 'react-router-dom';
import { Button } from '@/components/Elements/Button';
import landing from '@/assets/landing-page.svg';

const Landing = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row h-full w-full justify-around mt-20'>
      <div className=''>
        <img src={landing} width={440} />
      </div>
      <div className='flex flex-col justify-end items-center lg:items-end text-center lg:text-right lg:px-20'>
        <h1 className='text-6xl font-bold'>
          Imagine if <br></br>
          <span className='font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]'>
            Snapchat
          </span>
          <br></br>
          had events.
          <p className='text-textSub font-thin mt-5 text-2xl max-w-md'>
            Easily host and share events with your friends across any social
            media.
          </p>
        </h1>

        <Button>
          <Link to='/create'>🎉 Create my event</Link>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
