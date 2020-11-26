import React from 'react';

import { Button } from 'lib/components/button';

export const App: React.FC = () => (
  <div className="container p-10 mx-auto">
    <p className="mb-4 text-xl">Medium Buttons:</p>
    <div className="flex items-center justify-between">
      <Button>Primary button</Button>
      <Button variant="success">Success button</Button>
      <Button variant="warn">Warn button</Button>
      <Button variant="danger">Danger button</Button>
    </div>
    <p className="mt-8 mb-4 text-xl">Small Buttons:</p>
    <div className="flex items-center justify-between">
      <Button size="small">Primary button</Button>
      <Button variant="success" size="small">
        Success button
      </Button>
      <Button variant="warn" size="small">
        Warn button
      </Button>
      <Button variant="danger" size="small">
        Danger button
      </Button>
    </div>
  </div>
);
