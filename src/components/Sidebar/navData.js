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
        label: 'Base',
        path: '/ui',
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
    ],
  },
  {
    label: 'Components',
    path: '/',
    faIcon: 'sitemap',
  },
];

export default navData;
