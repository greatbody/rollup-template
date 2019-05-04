// rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import copy from 'rollup-plugin-copy'

export default [{
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: [
    // 'axios',
    // 'fs',
    // 'diff',
    // 'lodash',
    // list external libs we use here to let rollup ignore
  ],
  plugins: [
    copy({
      targets: {
        // use to copy files from source to dest without parsing
      },
    }),
    resolve({
      mainFields: ['module', 'main'],
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**', // compile our source only
    }),
  ],
}, {
  input: './src/world.js',
  output: {
    file: 'dist/world.js',
    format: 'cjs',
  },
  external: [
  ],
  plugins: [
    copy({
    }),
    resolve({
      mainFields: ['module', 'main'],
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
  ],
}]
