import { ComponentProps } from 'react';
import clsx from 'clsx';

export const Form = ({ ...props }: ComponentProps<'form'>) => {
  return (
    <form
      {...props}
      className={clsx(
        `lg:p-20 m-4 p-10 items-center w-fit flex flex-col border-4
      duration-700 border-[#E87BF8]/50 transition-color 
      rounded-lg border-dashed hover:bg-alertWarningLight/20`,
        props.className
      )}
    >
      {props.children}
    </form>
  );
};
