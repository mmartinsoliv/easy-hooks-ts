import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'izi-hooks',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true
})
