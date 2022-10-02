import React from 'react';
import clsx from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          `px-4 m-2 p-1 w-full outline-none font-medium text-textMain
          focus:border-alertWarning/50
          duration-700 border-sm bg-transparent border-b-2 
      transition-colors  `,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
