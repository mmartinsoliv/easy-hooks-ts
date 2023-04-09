import { defineConfig } from 'tsup'

export default defineConfig({
  sourcemap: true,
  // minify: true,
  dts: true,
  format: ['esm', 'cjs'],
  loader: {
    '.js': 'jsx'
  }
})
