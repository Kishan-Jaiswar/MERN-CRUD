import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",  // ✅ Ensure correct base path for Vercel
  build: {
    outDir: "dist",   // ✅ Vite will build into the "dist" folder
    emptyOutDir: true,
  },
  server: {
    port: 5173
  }
});