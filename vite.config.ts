import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    root: 'src',
    exclude: ['**/node_modules/**', '**/dist/**', 'setup.ts'],
    coverage: { exclude: ['setup.ts', '**/*.spec.ts'] },
    setupFiles: ['setup.ts']
  }
})
