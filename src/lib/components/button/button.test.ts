import * as path from 'path';
import { run, AxeResults } from 'axe-core';
import { reactRunDOM, renderDocument, renderErr } from '@component-controls/test-renderers';
import '@component-controls/jest-axe-matcher';
import { loadConfigurations } from '@component-controls/config';

import { render, act } from '@testing-library/react';

import * as examples from './button.stories';
import data from './button.data';

describe('button', () => {
  const configPath = path.resolve(__dirname, '../../../../.storybook');
  const config = loadConfigurations(configPath);
  let renderedExamples: ReturnType<typeof renderDocument> = [];
  act(() => {
    renderedExamples = renderDocument(examples, config, data);
  });
  if (!renderedExamples) {
    renderErr();
    return;
  }
  renderedExamples.forEach(({ name, rendered, dataId, values }) => {
    describe(name, () => {
      const runTests = (): void => {
        it('snapshot', () => {
          const { asFragment } = render(rendered);
          expect(asFragment()).toMatchSnapshot();
        });
        it('accessibility', async () => {
          const axeResults = await reactRunDOM<AxeResults>(rendered, run);
          expect(axeResults).toHaveNoAxeViolations();
        });
      };
      if (dataId && values) {
        describe(dataId, runTests);
      } else {
        runTests();
      }
    });
  });
});
