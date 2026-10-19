/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lucas Matos | Data Engineering',
  tagline: 'Reliable data systems for analytics and better decisions.',
  url: 'https://lmatospereira.github.io',
  baseUrl: '/',
  organizationName: 'lmatospereira',
  projectName: 'lmatospereira.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      { name: 'keywords', content: 'Lucas Matos, Data Engineer, ETL, Python, SQL, Spark, analytics' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Lucas Matos | Data Engineering' },
      { property: 'og:description', content: 'Data systems built to hold up. Data engineering, ETL and analytics.' },
    ],
    navbar: {
      title: 'Lucas Matos',
      items: [
        { to: '/', label: 'Overview', position: 'right' },
        { to: '/docs/portfolio', label: 'Projects', position: 'right' },
        {
          href: 'https://github.com/lmatospereira',
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
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lmatospereira/' },
            { label: 'GitHub', href: 'https://github.com/lmatospereira' },
            { label: 'Email', href: 'mailto:lmatos.pereira@gmail.com' },
          ],
        },
      ],
      copyright: 'Lucas Matos · Data Engineering',
    },
  },
};

module.exports = config;