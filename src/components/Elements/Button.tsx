import { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

const buttonTypes = {
  default:
    'text-white from-[#8456EC] to-[#E87BF8] bg-gradient-to-r hover:scale-110',
  light:
    'text-black hover:bg-violet-800 hover:border-violet-800 hover:text-white',
  danger: 'text-alertWarning bg-alertWarningLight hover:border-alertWarning',
};

const buttonSizes = {
  sm: 'p-1 w-[100px] lg:p-1 lg:w-[190px] text-md lg:text-lg',
  default: 'p-4 w-[190px] lg:p-4 lg:w-[320px] text-md lg:text-2xl',
};

type buttonProps = ComponentPropsWithRef<'button'> & {
  buttonType?: keyof typeof buttonTypes;
  buttonSize?: keyof typeof buttonSizes;
};

export const Button = ({
  buttonSize = 'default',
  buttonType = 'default',
  ...props
}: buttonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        `p-4 w-[190px] lg:p-4 lg:w-[320px] text-md 
        lg:text-2xl font-bold font-helvetica border-2 transition-all 
        duration-500 rounded-md`,
        buttonTypes[buttonType],
        buttonSizes[buttonSize],
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
