const { description } = require("../../package");

module.exports = {
  title: "Wrappr",
  description: description,
  homepage: "http://docs.wrappr.wtf/",

  head: [
    ["meta", { name: "theme-color", content: "#30FDFD" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  plugins: [
    ['@dovyp/vuepress-plugin-clipboard-copy', true]
  ],

  theme: "default-prefers-color-scheme",
  themeConfig: {
    overrideTheme: "dark",
    ostname: 'https://docs.wrappr.wtf/',
    docsRepo: 'https://github.com/kalidao/wrappr-docs',
    docsBranch: 'main',
    docsDir: "src",
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started/what/" },
      { text: "How To", link: "/how-to/quick-notes/" },
      { text: "Create", link: "/create/" },
      { text: "Explore", link: "/explore/" },
    ],
    sidebarDepth: 10,
    sidebar: {
      "/get-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [
            "/get-started/what/",
            "/get-started/where/",
            "/get-started/why/",
          ],
        },
      ],
      "/how-to/": [
        {
          title: "How To",
          collapsable: false,
          children: [
            "/how-to/quick-notes/",
            "/how-to/LLC/",
            "/how-to/UNA/",
            "/how-to/charter/",
          ],
        },
      ],
    },
    smoothScroll: true,
  },
};
