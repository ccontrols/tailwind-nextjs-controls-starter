import React from 'react';
import { screen, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button, ButtonProps } from './button';

const mockedProps: ButtonProps = {
  variant: 'primary',
};

const setup = (props: Partial<ButtonProps> = {}): RenderResult => {
  const setupProps = { ...mockedProps, ...props };
  return render(<Button {...setupProps}>Button Label</Button>);
};

describe('<Button />', () => {
  it('should render the correct button text', () => {
    setup();
    const button = screen.getByText(/Button Label/i);
    expect(button).toBeInTheDocument();
  });
});

describe('Button props', () => {
  it('props { variant: "primary" }', () => {
    setup({ variant: 'primary' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('bg-primary-500 hover:bg-primary-600');
  });

  it('props { variant: "success" }', () => {
    setup({ variant: 'success' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('bg-green-500 hover:bg-green-600');
  });

  it('props { variant: "warn" }', () => {
    setup({ variant: 'warn' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('bg-yellow-500 hover:bg-yellow-600');
  });

  it('props { variant: "danger" }', () => {
    setup({ variant: 'danger' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('bg-red-500 hover:bg-red-600');
  });

  it('props { size: "small" }', () => {
    setup({ size: 'small' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('py-2 px-6');
  });

  it('props { size: "medium" }', () => {
    setup({ size: 'medium' });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('py-4 px-8');
  });

  it('props { fullWidth: true }', () => {
    setup({ fullWidth: true });
    const button = screen.getByText(/Button Label/i);
    expect(button).toHaveClass('w-full');
  });
});
