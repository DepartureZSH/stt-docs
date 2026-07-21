import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '午时智能教务系统',
  tagline: '致力于为学校提供务实、智能的教务管理解决方案。',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DepartureZSH', // Usually your GitHub org/user name.
  projectName: 'stt-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/DepartureZSH/stt-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/template.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '午时智能教务系统',
      logo: {
        alt: '午时智能教务系统 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          to: '/docs/user-guide/complete-workflow',
          label: '完整流程',
          position: 'left',
        },
        {
          to: '/docs/user-guide/faq-glossary',
          label: '常见问题',
          position: 'left',
        },
        {
          href: 'https://github.com/DepartureZSH/stt-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '社区',
          items: [
            {
              label: '小红书',
              href: 'https://jqvyybbrdduk.sealosbja.site/',
            },
            {
              label: 'Bilibili',
              href: 'https://jqvyybbrdduk.sealosbja.site/', // Replace with actual Bilibili link
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DepartureZSH/stt-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DepartureZSH, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
