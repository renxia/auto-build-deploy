// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Elasticsearch 中文文档",
  tagline: "Elasticsearch 中文文档",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://lzw.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/elasticsearch-cn/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "renxi", // Usually your GitHub org/user name.
  // projectName: "elasticsearch-doc", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  scripts: [
    {
      src: 'https://lzw.me/x/lib/utils/h5-common.min.js',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      metadata: [
        {
          name: "keywords",
          content:
            "Elastic,Elasticsearch,Elasticsearch api,ElasticStack,ELK,Document,docs,文档,中文文档,入门",
        },
      ],
      navbar: {
        title: "Elasticsearch 中文文档",
        logo: {
          alt: "elasticsearch Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            href: "https://lzw.me/docs/elasticsearch-cn/",
            label: "首页",
            position: "right",
          },
          {
            href: "https://docs.bookhub.tech",
            label: "中文文档",
            position: "right",
          },
          {
            href: "https://github.com/dev2007/elasticsearch-doc",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub 仓库",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "IT工具",
            items: [
              { label: "有趣工具箱", href: "https://tools.lzw.me" },
              { label: "IT速查清单", href: "https://lzw.me/x/reference/" },
            ],
          },
          {
            title: "其他文档",
            items: [
              {
                label: 'Gemini CLI 中文教程',
                href: "https://lzw.me/docs/gemini-cli-learning",
              },
              {
                label: "量化百科",
                href: "https://lzw.me/docs/quant-wiki",
              },
              {
                label: "Apache TVM 中文站",
                href: "https://lzw.me/docs/tvm-cn/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} bookHub.tech`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "bash",
          "java",
          "yaml",
          "json",
          "groovy",
          "kotlin",
          "graphql",
          "properties",
          "toml",
          "hoon",
        ],
      },
    }),

  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en", "zh"], // language codes
      },
    ],
  ],
};

module.exports = config;
