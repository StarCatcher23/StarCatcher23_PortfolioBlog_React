import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/StarCatcher23_PortfolioBlog_React/",
  plugins: [react()],
  build: {
    cssMinify: "esbuild",
  },
});
