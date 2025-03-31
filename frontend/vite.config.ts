import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // ✅ Ensures correct base path for Vercel deployment
  build: {
    outDir: "dist", // ✅ Ensures Vite outputs to the correct folder
    emptyOutDir: true,
  },
  server: {
    port: 5173, // ✅ Ensure it runs on the same port during local development
  },
});