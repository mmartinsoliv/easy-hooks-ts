import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'easy-hooks-ts',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true
})
