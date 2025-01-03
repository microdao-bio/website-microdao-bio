// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MicroDAO',
  tagline: 'Funding the Next generation of AMR Solutions (Antimicrobials, Vaccines & Diagnostics)',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://microdao.bio',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MicroDAO', // Usually your GitHub org/user name.
  projectName: 'microdao.bio', // Usually your repo name.

  onBrokenLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        googleAnalytics: {
          trackingID: '-----',
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/microdao-bio/website-microdao-bio',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://microdao.substack.com/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/styles/custom.css',
        },
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      hideOnScroll: true,
      title: 'microDAO',
      logo: {
        alt: 'microDAO',
        src: 'img/logos/micro-dao-logo.png',
        srcDark: 'img/logos/micro-dao-logo.png',
      },
      items: [
        { to: 'https://microdao.substack.com/', label: 'Blog' },
        // {
        //   href: 'https://alpha.forum.microdao.bio/',
        //   label: 'Forum',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/microdao-bio/',
          className: 'header-github-link',
          'aria-label': 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      //  links: [
      // {
      //   title: 'Documentation',
      //   items: [
      //     {
      //       label: 'Quick Start',
      //       to: 'docs/quick-start',
      //     },
      //     {
      //       label: 'Run a Chaos Experiment',
      //       to: 'docs/run-a-chaos-experiment',
      //     },
      //     {
      //       label: 'Developer Guide Overview',
      //       to: 'docs/developer-guide-overview',
      //     },
      //     {
      //       label: 'FAQs',
      //       to: 'docs/faqs',
      //     },
      //   ],
      // },
      // {
      //   title: 'Community',
      //   items: [
      //     {
      //       label: 'Blog',
      //       to: 'blog',
      //     },
      //     {
      //       label: 'CNCF Community Group',
      //       href: 'https://community.cncf.io/chaos-mesh-community/',
      //     },
      //     {
      //       label: 'GitHub',
      //       href: 'https://github.com/chaos-mesh/chaos-mesh',
      //     },
      //     {
      //       label: 'Slack (#project-chaos-mesh)',
      //       href: 'https://slack.cncf.io/',
      //     },
      //     {
      //       label: 'Twitter',
      //       href: 'https://twitter.com/chaos_mesh',
      //     },
      //   ],
      // },
      // {
      //   title: 'Acknowledgements',
      //   items: [
      //     {
      //       html: `
      //       <ul>
      //       <li>
      //       <p style="font-size: 0.875rem;">Thanks to netlify's Open Source Plan.</p>
      //       <a href="https://www.netlify.com" target="_blank"><img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /></a>
      //       </li>
      //       <li>
      //       <p>Thanks for the <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>.</p>
      //       </li>
      //       </ul>`,
      //     },
      //   ],
      // },
      //      ],
      copyright: `
        <p style="font-weight: 500;">Copyright © microDAO ${new Date().getFullYear()} | Derived from <a href='https://github.com/chaos-mesh/website'>Chaos Mesh documentation site</a> </p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: prismThemes.vsDark.plain,
        styles: [
          ...prismThemes.vsDark.styles,
          {
            types: ['function', 'keyword'],
            style: {
              color: '#f25c7c',
            },
          },
        ],
      },
      additionalLanguages: ['bash'],
    },
  },

  plugins: ['./docusaurus-tailwind-v3'],
}

export default config
