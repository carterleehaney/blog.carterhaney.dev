// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Carter's Blog",
  tagline: 'A blog about my projects, competitions, and other cool things.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://blog.carterhaney.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'carterleehaney', // Usually your GitHub org/user name.
  projectName: 'blog.carterhaney.dev', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable docs plugin
        blog: {
          routeBasePath: '/', // Serve blog at root URL
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: "Carter's Blog",
          blogDescription: 'A blog about my projects, competitions, and other cool things.',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/pencil-cat.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true, // Force dark mode
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Carter's Blog",
        logo: {
          alt: "Carter's Blog Logo",
          src: 'img/pencil-cat.jpg',
        },
        items: [
          {
            href: 'https://carterhaney.dev',
            label: 'Main Website',
            position: 'right',
          },
          {
            href: 'https://github.com/carterleehaney',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/carterhaney/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/carterleehaney',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/carterleehaney',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Website',
                href: 'https://carterhaney.dev',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Carter Haney`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
