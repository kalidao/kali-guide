const { description } = require("../../package");

module.exports = {
  title: "Kali Guide",
  description: description,
  //homepage: "http://docs.huff.sh/",

  head: [
    ["meta", { name: "theme-color", content: "#c70202" }],
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
    ostname: 'https://guide.kali.gg/',
    docsRepo: 'https://github.com/kalidao/kali-guide',
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
            "/get-started/overview/",
            "/get-started/installing/",
            "/get-started/compiling/",
            "/get-started/project-quickstart/",
            "/get-started/huff-by-example/",
          ],
        },
      ],
      "/resources/": [
        {
          title: "Resources",
          collapsable: false,
          children: [
            "/resources/overview/",
            "/resources/cli/"
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
