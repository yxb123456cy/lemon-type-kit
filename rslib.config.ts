import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2020',
      dts: {
        bundle: true,
      },
    },
    {
      format: 'cjs',
      syntax: 'es2020',
    },
  ],
  source: {
    entry: {
      index: './src/index.ts',
    },
    tsconfigPath: './tsconfig.json',
  },
  output: {
    target: 'node',
    distPath: {
      root: './dist',
    },
    cleanDistPath: true,
  },
});
