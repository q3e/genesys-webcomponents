import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  copy: [
    {
      dest: '../fonts',
      src: 'style/fonts'
    },
    {
      dest: '../icons',
      src: 'style/icons'
    },
    {
      dest: '../genesys-webcomponents/i18n',
      src: '../build/i18n'
    }
  ],
  excludeSrc: [
    '**/test/**',
    '**/*.spec.*',
    '**/*.e2e.*',
    '**/stories/**',
    '**/**.md'
  ],
  namespace: 'genesys-webcomponents',
  outputTargets: [
    {
      dir: 'dist',
      type: 'dist'
    }
  ],
  plugins: [
    less({
      injectGlobalPaths: ['src/style/variables.less', 'src/style/mixins.less']
    })
  ],
  testing: {
    browserArgs: ['--no-sandbox'],
    browserHeadless: true,
    collectCoverage: true,
    coverageDirectory: 'build/test-reports/coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
    reporters: [
      'default',
      [
        'jest-junit',
        {
          outputDirectory: 'build/test-reports'
        }
      ]
    ]
  }
};
