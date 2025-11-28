import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/diligentiq/',  // 👈 this is important for GitHub Pages project sites
  plugins: [react()],
});
