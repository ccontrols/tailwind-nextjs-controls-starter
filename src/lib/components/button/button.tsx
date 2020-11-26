import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'primary' | 'success' | 'warn' | 'danger';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  fullWidth,
  className,
  ...props
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(
      'rounded-md focus:outline-none focus:shadow-outline',
      { 'bg-primary-500 text-white hover:bg-primary-600': variant === 'primary' },
      { 'bg-green-500 text-white hover:bg-green-600': variant === 'success' },
      { 'bg-yellow-500 text-white hover:bg-yellow-600': variant === 'warn' },
      { 'bg-red-500 text-white hover:bg-red-600': variant === 'danger' },
      { 'py-2 px-6': size === 'small' },
      { 'py-4 px-8': size === 'medium' },
      { 'w-full': fullWidth },
      className,
    )}
    {...props}
  >
    {children}
  </button>
);
