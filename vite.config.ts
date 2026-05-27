import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const plugins: any[] = [react()]

// kimi-plugin-inspect-react may not be available in CI environments
try {
  const { inspectAttr } = await import('kimi-plugin-inspect-react')
  plugins.unshift(inspectAttr())
} catch {
  // skip - plugin not available
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins,
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
