import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // ✅ Ensure correct base path for Vercel
  build: {
    outDir: "frontend/dist", // ✅ Vite will build into the "frontend/dist" folder
    emptyOutDir: true, // Clean the directory before build
  },
});