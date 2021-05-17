import React from 'react';
import { Example, Document } from '@component-controls/core';

import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  smartControls: {
    include: (control) => control.prop?.parentName === 'ButtonProps',
  },
} as Document;

const Template: Example<ButtonProps> = (args) => <Button {...args}>Button Label</Button>;

export const Primary = Template.bind();
Primary.controls = {
  variant: 'primary',
};

export const Success = Template.bind();
Success.controls = {
  variant: 'success',
};

export const Warn = Template.bind();
Warn.controls = {
  variant: 'warn',
};

export const Danger = Template.bind();
Danger.controls = {
  variant: 'danger',
};

export const FullWidth = Template.bind();
FullWidth.controls = {
  fullWidth: true,
};

export const Medium = Template.bind();
Medium.controls = {
  size: 'medium',
};

export const Small = Template.bind();
Small.controls = {
  size: 'small',
};
