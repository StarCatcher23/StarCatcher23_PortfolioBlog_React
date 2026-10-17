import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base:
    process.env.NETLIFY === "true" ? "/" : "/StarCatcher23_PortfolioBlog_React/",
  plugins: [react()],
  build: {
    cssMinify: "esbuild",
  },
});
