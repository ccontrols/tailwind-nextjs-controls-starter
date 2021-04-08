import * as path from 'path';
import { loadConfigurations, extractDocuments, isMDXDocument } from '@component-controls/config';
import { renderExample, renderErr } from '@component-controls/test-renderers';
import { render, act } from '@testing-library/react';

describe('component-controls generated', () => {
  const configPath = path.resolve(__dirname, '../.storybook');
  const config = loadConfigurations(configPath);
  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents
      .filter((file: string) => !isMDXDocument(file, config.instrument))
      .forEach((file: string) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        const exports = require(file);
        const doc = exports.default;
        const examples = Object.keys(exports)
          .filter((key) => key !== 'default')
          .map((key) => exports[key]);

        if (examples.length) {
          describe(doc.title, () => {
            examples.forEach((example) => {
              it(example.name, async () => {
                let rendered;
                act(() => {
                  rendered = renderExample({
                    example,
                    doc,
                    config,
                  });
                });
                if (!rendered) {
                  renderErr();
                  return;
                }
                const { asFragment } = render(rendered);
                expect(asFragment()).toMatchSnapshot();
              });
            });
          });
        }
      });
  }
});
