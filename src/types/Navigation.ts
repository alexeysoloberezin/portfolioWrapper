interface menuItem {
  key: string,
  label: string,
  link: string,
}

export const MenuItems: menuItem[] = [
  { key: 'home', label: 'Главная', link: '/' },
  { key: 'about', label: 'Обо мне', link: '/about' },
  { key: 'portfolio', label: 'Портфолио', link: '/portfolio' },
  { key: 'liveCoding', label: 'Live Codding', link: '/liveCodding' },
  { key: 'faq', label: 'Faq', link: '/faq' },
];