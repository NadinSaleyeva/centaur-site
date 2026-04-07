import { services } from './services';
import { industries } from './industries';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Услуги',
    href: '/ru/uslugi/',
    children: services.map((s) => ({
      label: s.shortTitle,
      href: `/ru/uslugi/${s.slug}/`,
    })),
  },
  {
    label: 'Отрасли',
    href: '/ru/otrasli/',
    children: industries.map((i) => ({
      label: i.title,
      href: `/ru/otrasli/${i.slug}/`,
    })),
  },
  { label: 'Как мы работаем', href: '/ru/kak-my-rabotaem/' },
  { label: 'Кейсы', href: '/ru/kejsy/' },
  { label: 'Блог', href: '/ru/blog/' },
];

export const ctaNav = {
  label: 'Пройти ИИ-аудит',
  href: '/ru/audit/',
};

export const footerNav: NavItem[] = [
  { label: 'Стоимость', href: '/ru/stoimost/' },
  { label: 'ИИ-агент vs чат-бот', href: '/ru/ii-agent-vs-chat-bot/' },
  { label: 'О компании', href: '/ru/o-kompanii/' },
  { label: 'Политика конфиденциальности', href: '/ru/politika-konfidencialnosti/' },
];
