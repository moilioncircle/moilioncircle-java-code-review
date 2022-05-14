import { sidebar } from 'vuepress-theme-hope';

export default sidebar([
  '/',
  {
    icon: 'creative',
    text: 'Guide',
    prefix: '/guide/',
    link: '/guide/',
    children: 'structure',
  },
]);
