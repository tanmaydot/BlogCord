// One file to make the theme yours.
export const SITE = {
  title: 'BlogCord',
  description: 'A Discord-style blog template for Astro.',
  url: 'https://the-blog-master.vercel.app',
  lang: 'en',
  author: { name: 'Tanmay', initial: 'T' },
  // Round icons in the server rail (below the home button).
  links: [
    { label: 'GitHub', href: 'https://github.com/tanmaydot', icon: 'GH' },
    { label: 'RSS', href: '/rss.xml', icon: 'RSS' },
  ],
  // Optional comments (https://giscus.app). Leave empty to disable.
  giscus: { repo: '', repoId: '', category: '', categoryId: '' },
};
