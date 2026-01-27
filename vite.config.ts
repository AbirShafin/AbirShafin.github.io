import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
