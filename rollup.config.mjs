import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: {
    index: 'index.js',
  },
  output: {
    dir: 'dist',
    format: 'es'
  },
  
  plugins: [
    json(),
    commonjs(),
    nodeResolve({preferBuiltins: false, browser: true}),
  ],
};