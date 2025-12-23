import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@lemondev/type-kit",
  description: "A comprehensive utility library for TypeScript projects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/lemon.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "开始", link: "/guide/introduction" },
      { text: "API", link: "/api/array" },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "简介", link: "/guide/introduction" },
          { text: "快速开始", link: "/guide/quick-start" },
        ],
      },
      {
        text: "API Reference",
        items: [
          { text: "Array Utils", link: "/api/array" },
          { text: "Date Utils", link: "/api/date" },
          { text: "Number Utils", link: "/api/number" },
          { text: "String Utils", link: "/api/string" },
          { text: "Cache Utils", link: "/api/cache" },
          { text: "Log Utils", link: "/api/log" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/yxb123456cy/lemon-type-kit" },
    ],
  },
});
