import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      enabled: true,
      provider: 'istanbul',
      include: ['estoque.js'],
      reporter: ['text'],
    },
  },
});
