import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div
        className='min-h-screen font-helvetica 
      flex flex-col text-textMain bg-main pb-12'
      >
        {children}
      </div>
    </>
  );
};
