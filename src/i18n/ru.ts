export const ru = {
  // Site
  'site.name': 'Centaur Labs',
  'site.tagline': 'Бутиковое ИИ-агентство',

  // Hero
  'hero.headline': 'Чат-боты говорят.\nИИ-агенты – действуют.',
  'hero.subheadline': 'Внедряем автономных ИИ-агентов, которые берут на себя реальные бизнес-процессы – от квалификации лидов до полной автоматизации отделов.',
  'hero.cta.primary': 'Бесплатный ИИ-аудит',
  'hero.cta.secondary': 'Посмотреть кейсы',

  // Metrics
  'metrics.implementations': 'внедрений',
  'metrics.saving': 'экономия времени',
  'metrics.launch': 'запуск',
  'metrics.industries': 'отраслей',

  // Services
  'services.eyebrow': 'Что мы делаем',
  'services.title': 'Решения для вашего бизнеса',
  'services.link': 'Подробнее',

  // Agent vs Bot
  'agentvsbot.title': 'ИИ-агент ≠ чат-бот',
  'agentvsbot.subtitle': 'Если ваш бот только отвечает на вопросы – вы теряете деньги',
  'agentvsbot.link': 'Подробнее о разнице',
  'agentvsbot.bot.title': 'Обычный чат-бот',
  'agentvsbot.bot.1': 'Отвечает по скрипту',
  'agentvsbot.bot.2': 'Не понимает контекст',
  'agentvsbot.bot.3': 'Не выполняет действий',
  'agentvsbot.agent.title': 'ИИ-агент Centaur Labs',
  'agentvsbot.agent.1': 'Понимает задачу целиком',
  'agentvsbot.agent.2': 'Работает с CRM, API, базами',
  'agentvsbot.agent.3': 'Выполняет действия за клиента',

  // Industries
  'industries.eyebrow': 'Для кого',
  'industries.title': 'Отрасли, которые мы автоматизируем',

  // Process
  'process.eyebrow': 'Как мы работаем',
  'process.title': 'От аудита до запуска – за 4–6 недель',
  'process.link': 'Подробнее о процессе',
  'process.1.title': 'Бесплатный аудит',
  'process.1.desc': 'Оцениваем процессы, находим точки автоматизации с максимальным ROI.',
  'process.1.time': '1–2 дня',
  'process.2.title': 'Проектирование',
  'process.2.desc': 'Архитектура агента, выбор инструментов, утверждение ТЗ.',
  'process.2.time': '1 неделя',
  'process.3.title': 'Прототип (PoC)',
  'process.3.desc': 'Запуск первого агента на реальных данных. Измеряем результат.',
  'process.3.time': '2–3 недели',
  'process.4.title': 'Запуск и поддержка',
  'process.4.desc': 'Полноценное внедрение, обучение команды, мониторинг и доработки.',
  'process.4.time': '1–2 недели',

  // Social proof
  'proof.title': 'Результаты наших внедрений',

  // CTA
  'cta.title': 'Узнайте, где ваш бизнес теряет деньги',
  'cta.subtitle': 'Бесплатный ИИ-аудит: 5 минут на вопросы – персональный отчёт с рекомендациями.',
  'cta.primary': 'Пройти бесплатный ИИ-аудит',
  'cta.trust': 'Бесплатно · 15 минут · Без обязательств',

  // Footer
  'footer.desc': 'Бутиковое ИИ-агентство. Внедряем автономных ИИ-агентов для автоматизации бизнес-процессов.',
  'footer.nav': 'Навигация',
  'footer.company': 'Компания',
  'footer.contact': 'Контакты',
  'footer.copyright': '© 2026 Centaur Labs. Все права защищены.',

  // Nav
  'nav.audit': 'Пройти ИИ-аудит',
} as const;

export type TranslationKey = keyof typeof ru;
