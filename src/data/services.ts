export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  icon: string;
  pain: string;
  tag: string;
  order: number;
}

export const services: Service[] = [
  {
    id: 'S1',
    title: 'ИИ-ассистент на сайт',
    shortTitle: 'Чат-бот для бизнеса',
    slug: 'ii-assistent-na-sajt',
    description: 'Отвечает клиентам 24/7, консультирует по услугам, квалифицирует и маршрутизирует лиды.',
    icon: 'message-circle',
    pain: 'P3',
    tag: 'Популярное',
    order: 1,
  },
  {
    id: 'S2',
    title: 'ИИ-парсер и сбор данных',
    shortTitle: 'Парсинг данных',
    slug: 'parsing-dannyh',
    description: 'Собирает, структурирует и интегрирует данные из сотен источников в единую базу.',
    icon: 'database',
    pain: 'P4',
    tag: '1600 запросов/мес',
    order: 2,
  },
  {
    id: 'S4',
    title: 'ИИ-переводчик и локализация',
    shortTitle: 'Перевод сайтов',
    slug: 'perevod-sajta',
    description: 'Контекстный перевод сайтов и документов с учётом терминологии и целевого рынка.',
    icon: 'globe',
    pain: 'P6',
    tag: '',
    order: 3,
  },
  {
    id: 'S5',
    title: 'Управление автопарком',
    shortTitle: 'Учёт автопарка',
    slug: 'uchet-avtoparka',
    description: 'Контроль пробегов, напоминания о ТО, аналитика расходов — без Excel и ERP.',
    icon: 'truck',
    pain: 'P1',
    tag: '0 конкурентов',
    order: 4,
  },
  {
    id: 'S6',
    title: 'Онлайн-запись и ведение клиентов',
    shortTitle: 'Онлайн-запись',
    slug: 'onlajn-zapis',
    description: 'Бот-консультант: записывает, напоминает, ведёт историю клиентов. Не просто SaaS.',
    icon: 'calendar',
    pain: 'P1',
    tag: '',
    order: 5,
  },
  {
    id: 'S7',
    title: 'Автоматизация карточек товаров',
    shortTitle: 'Карточки товаров',
    slug: 'kartochki-tovarov',
    description: '100 карточек за день вместо недели. Генерация описаний, SEO, публикация на маркетплейсы.',
    icon: 'package',
    pain: 'P4',
    tag: '',
    order: 6,
  },
];
