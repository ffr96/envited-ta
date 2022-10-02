import { DisplayEvent } from '@/features';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Event = () => {
  const { state } = useLocation();

  if (!state) return <Link to='/404' />;

  return (
    <div>
      <DisplayEvent {...state} />
    </div>
  );
};

export default Event;
