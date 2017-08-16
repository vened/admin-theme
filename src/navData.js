const navData = [
  {
    label: 'Dashboard',
    path: '/',
    faIcon: 'home',
  },
  {
    label: 'UI',
    path: '/ui',
    faIcon: 'desktop',
    children: [
      {
        label: 'Avatar',
        path: '/ui/avatar',
      },
      {
        label: 'Badge',
        path: '/ui/badge',
      },
      {
        label: 'General',
        path: '/ui/general',
      },
      {
        label: 'Buttons',
        path: '/ui/buttons',
      },
      {
        label: 'Components',
        path: '/ui/components',
      },
      {
        label: 'Base',
        path: '/ui',
      },
    ],
  },
  {
    label: 'Components',
    path: '/',
    faIcon: 'sitemap',
  },
];

export default navData;
