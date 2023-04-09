/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tsConfigPaths(),
    dts({
      include: ['src']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'izi-hooks',
      formats: ['es', 'cjs'],
      fileName: (format) => `izi-hooks.${format === 'cjs' ? 'cjs' : 'es.js'}`
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies)
    }
  }
})
