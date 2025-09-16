// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://manikrishna-m.github.io", // your main GitHub Pages domain
  base: "/devportfolio",                   // repo name (important for project sites!)
  vite: {
    plugins: [tailwindcss()],
  },
});
