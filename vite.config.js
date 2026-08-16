import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/StarCatcher23_PortfolioBlog_React/",
  plugins: [react()],
  build: {
    cssMinify: "esbuild",
  },
});
