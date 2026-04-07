export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  services: string[];
  order: number;
}

export const industries: Industry[] = [
  {
    id: 'I1',
    title: 'E-commerce',
    slug: 'ecommerce',
    description: 'Консультант, контент, локализация и каталог — без раздувания штата.',
    icon: 'shopping-cart',
    services: ['S1', 'S3', 'S4', 'S7'],
    order: 1,
  },
  {
    id: 'I2',
    title: 'Маркетплейсы (WB, Ozon)',
    slug: 'marketplejsy',
    description: 'Карточки, парсинг цен, контент — на автопилоте для селлеров.',
    icon: 'store',
    services: ['S2', 'S3', 'S7'],
    order: 2,
  },
  {
    id: 'I3',
    title: 'Салоны красоты и клиники',
    slug: 'byuti-kliniki',
    description: 'Запись, консультации, напоминания — меньше простоев, больше выручки.',
    icon: 'scissors',
    services: ['S1', 'S6'],
    order: 3,
  },
  {
    id: 'I4',
    title: 'Логистика и автопарки',
    slug: 'logistika',
    description: 'Контроль ТО, маршруты, расходы — без Excel и лишнего персонала.',
    icon: 'truck',
    services: ['S5'],
    order: 4,
  },
  {
    id: 'I5',
    title: 'Недвижимость',
    slug: 'nedvizhimost',
    description: 'Парсинг объявлений, бот-консультант, квалификация лидов.',
    icon: 'building',
    services: ['S1', 'S2'],
    order: 5,
  },
  {
    id: 'I6',
    title: 'Рестораны и HoReCa',
    slug: 'restorany',
    description: 'Бронирование, меню, обратная связь — без лишнего персонала.',
    icon: 'utensils',
    services: ['S1', 'S6'],
    order: 6,
  },
];
