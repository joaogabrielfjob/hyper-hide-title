'use strict';

const produce = (config, override) => Object.assign({}, config, override);

exports.decorateConfig = config => {
  return produce(config, {
    css: `
      ${config.css || ''}
      .header_appTitle {
        display: none !important;
      }
    `,
  });
};