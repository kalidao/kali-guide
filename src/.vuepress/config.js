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
      { text: "Get Started", link: "/get-started/overview/" },
      { text: "Resources", link: "/resources/overview/" },
      { text: "Contribute", link: "/contribute/overview/" },
    ],
    sidebarDepth: 10,
    sidebar: {
      "/get-started/": [
        {
          title: "Get Started",
          collapsable: false,
          children: [
            "/get-started/overview/"
          ],
        },
      ],
      "/resources/": [
        {
          title: "Resources",
          collapsable: false,
          children: [
            "/resources/overview/",
          ]
        },
      ],
      "/contribute/": [
        {
          title: "Contribute",
          collapsable: false,
          children: [
            "/contribute/overview/",
          ],
        },
      ],
    },
    smoothScroll: true,
  },
};
