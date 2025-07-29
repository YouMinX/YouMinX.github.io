import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "目录",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "Markdown学习记录",
        icon: "pen-to-square",
        link: "Markdown学习文档",
      }

      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "香蕉 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //   ],
      // },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      // //{ text: "番茄", icon: "pen-to-square", link: "tomato" },
      // "strawberry",
    ],
  },
  {
    text: "V2文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
