/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/hooks/index.ts'),
      name: 'izi-hooks',
      formats: ['cjs', 'es'],
      fileName: (format) => `izi-hooks.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
