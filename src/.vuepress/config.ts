import { defineUserConfig } from "vuepress";

import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "YouMinX",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "vuepress-theme-hope 的博客演示",
    },
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
