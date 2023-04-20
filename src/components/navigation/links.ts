export const navLinks = [
  {
    name: 'About',
    path: '/about',
    class: 'about',
    auth: false,
    mobile: true,
    mobileOnly: false,
    dropdown: [
      { name: 'Newsletter', path: '/newsletter' },
      { name: 'Calendar', path: '/calendar' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    name: 'Services',
    path: '/assistance',
    class: 'services',
    auth: false,
    mobile: true,
    mobileOnly: false,
  },
  {
    name: 'Support Us',
    path: '/support',
    class: 'support',
    auth: false,
    mobile: true,
    mobileOnly: false,
    dropdown: [{ name: 'Church Partner', path: '/partners' }],
  },
  {
    name: 'Donate',
    path: '/',
    class: 'donate',
    auth: false,
    mobile: true,
    mobileOnly: true,
  },
  {
    name: 'FAQs',
    path: '/faq',
    class: 'faq',
    auth: false,
    mobile: true,
    mobileOnly: true,
  },
];
