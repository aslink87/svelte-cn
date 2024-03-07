export const navLinks = [
  {
    name: 'Donate',
    path: '/donate',
    class: 'donate',
    auth: false,
    mobile: true,
    mobileOnly: false,
  },
  {
    name: 'About',
    path: '/about',
    class: 'about',
    auth: false,
    mobile: true,
    mobileOnly: false,
    dropdown: [
      { name: 'About Us', path: '/about' },
      { name: 'Newsletter', path: '/newsletter' },
      { name: 'Calendar', path: '/calendar' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  {
    name: 'Services',
    path: '/services',
    class: 'services',
    auth: false,
    mobile: true,
    mobileOnly: false,
  },
  {
    name: 'Support Us',
    path: '/donate',
    class: 'support',
    auth: false,
    mobile: false,
    mobileOnly: false,
    dropdown: [
      { name: 'How to Help', path: '/donate' },
      { name: 'Church Partners', path: '/churches' },
    ],
  },
  {
    name: 'Calendar',
    path: '/calendar',
    class: 'calendar-mobile',
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
  {
    name: 'Newsletters',
    path: '/newsletter',
    class: 'newsletters',
    auth: false,
    mobile: true,
    mobileOnly: true,
  },
  {
    name: 'Blog',
    path: '/blog',
    class: 'blog-mobile',
    auth: false,
    mobile: true,
    mobileOnly: true,
  },
  {
    name: 'Church Partners',
    path: '/churches',
    class: 'churches',
    auth: false,
    mobile: true,
    mobileOnly: true,
  },
];
