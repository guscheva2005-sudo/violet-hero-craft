import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Brain,
  Code2,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  MousePointer2,

  Palette,
  Puzzle,
  Rocket,
  Sparkles,
  Timer,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vibecoder-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Coder — цифровые продукты с характером" },
      {
        name: "description",
        content: "Портфолио вайбкодера: сайты, интерфейсы и digital-продукты от идеи до работающего запуска.",
      },
      { property: "og:title", content: "Vibe Coder — цифровые продукты с характером" },
      {
        property: "og:description",
        content: "Сайты и интерфейсы на стыке сильного дизайна, кода и AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  { label: "Концепт", icon: Sparkles },
  { label: "Дизайн", icon: Layers3 },
  { label: "Разработка", icon: Code2 },
  { label: "Запуск", icon: Zap },
];

const projects = [
  {
    id: "studyflow",
    title: "StudyFlow",
    description: "AI-платформа, которая строит персональные учебные траектории и помогает осваивать сложные темы быстрее.",
    tags: ["React", "TypeScript", "AI/ML", "Tailwind"],
    icon: GraduationCap,
  },
  {
    id: "neuroanalytics",
    title: "НейроАналитик",
    description: "AI-сервис для анализа данных: автоматическая обработка отчётов, прогнозы и визуализация инсайтов.",
    tags: ["Python", "FastAPI", "LLM", "PostgreSQL"],
    icon: LineChart,
  },
  {
    id: "launchpro",
    title: "LaunchPro",
    description: "Лендинг для продукта, заточенный под конверсию: чистая типографика, Motion и быстрый рендер.",
    tags: ["Next.js", "Figma", "Vercel", "Motion"],
    icon: Rocket,
  },
];

const services = [
  {
    id: "mvp",
    title: "MVP за неделю",
    description: "Превращаю идею в работающий прототип: от сценариев пользователя до первого экрана с реальными данными.",
    result: "Готовый продукт для теста гипотезы за 7 дней.",
    icon: Timer,
  },
  {
    id: "ai",
    title: "AI-автоматизация",
    description: "Встраиваю LLM и агентов в рабочие процессы: от генерации контента до анализа данных и поддержки клиентов.",
    result: "Экономия времени команды до 30 часов в месяц.",
    icon: Bot,
  },
  {
    id: "uiux",
    title: "UI/UX с вайбкодингом",
    description: "Создаю интерфейсы, где сильная типографика, анимация и логика работают как единый визуальный язык.",
    result: "Интерфейс, который запоминают и которым хотят пользоваться.",
    icon: Palette,
  },
  {
    id: "integrations",
    title: "Интеграции",
    description: "Соединяю сервисы, API и базы данных в одну экосистему, чтобы данные двигаются без ручной работы.",
    result: "Единый поток данных без дублей и ошибок.",
    icon: Puzzle,
  },
];

const processSteps = [
  {
    id: "discover",
    title: "Погружаюсь в задачу",
    description: "Разбираю бизнес-цели, аудиторию и ограничения — чтобы решение работало на результат, а не просто выглядело красиво.",
  },
  {
    id: "create",
    title: "Создаю с ИИ",
    description: "Генерирую концепции, код и контент с помощью LLM и автоматизации, ускоряя каждый этап в 2–3 раза.",
  },
  {
    id: "test",
    title: "Тестирую и улучшаю",
    description: "Проверяю интерфейсы, производительность и логику, довожу детали до состояния, которым приятно пользоваться.",
  },
  {
    id: "launch",
    title: "Запускаю и масштабирую",
    description: "Выкатываю продукт, настраиваю аналитику и интеграции, помогаю расти дальше без лишней ручной работы.",
  },
];

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background px-4 py-5 text-foreground sm:px-7 sm:py-7 lg:px-10 lg:py-8">
      <section
        aria-labelledby="hero-title"
        className="hero-shell relative mx-auto max-w-[1440px] overflow-hidden border border-border bg-card p-3 shadow-2xl sm:p-5 lg:p-7"
      >
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />

        <header className="relative z-20 flex items-start justify-between gap-4 pb-4 sm:items-center sm:pb-5">
          <a href="#top" className="flex items-center gap-3" aria-label="Vibe Coder — в начало">
            <span className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary font-display text-lg font-black text-secondary-foreground">
              VC
            </span>
            <span className="hidden text-lg font-semibold sm:block">Vibe Coder</span>
          </a>
          <p className="max-w-[15rem] text-right text-lg leading-tight text-muted-foreground sm:max-w-none">
            Дизайн × код × AI
          </p>
        </header>

        <div className="relative z-10 text-center">
          <p className="mb-1 text-lg font-medium uppercase text-primary">Портфолио / 2026</p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3rem,9vw,8.5rem)] font-black uppercase leading-[0.8] text-foreground"
          >
            Vibe
            <span className="block text-primary">Coder</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[20px] font-medium leading-[1.35] text-foreground sm:text-[22px]">
            Собираю цифровые продукты с характером — от первой идеи до живого интерфейса.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-5 h-12 rounded-full px-6 text-lg shadow-none"
          >
            <a href="#featured-projects">
              Смотреть работы <ArrowUpRight className="size-5" />
            </a>
          </Button>
        </div>

        <div id="top" className="relative z-10 mt-5 lg:mt-7">
          <div className="relative min-h-[22rem] overflow-hidden border border-border bg-secondary sm:min-h-[27rem] lg:min-h-[31rem]">
            <img
              src={heroImage}
              alt="Фиолетовая стеклянная форма вокруг ноутбука — визуальная метафора творческой разработки"
              width={1536}
              height={1024}
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div className="hero-image-wash absolute inset-0" aria-hidden="true" />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-border/70 px-4 py-3 sm:px-6">
              <span className="text-lg font-semibold">01 / Creative engineering</span>
              <MousePointer2 className="size-5 text-primary" aria-hidden="true" />
            </div>
          </div>


          <div className="hero-stamp absolute -right-2 -top-11 z-20 flex size-28 rotate-6 flex-col items-center justify-center rounded-full border-4 border-card bg-primary text-center text-primary-foreground shadow-xl sm:right-7 sm:-top-16 sm:size-36">
            <Sparkles className="mb-1 size-5" aria-hidden="true" />
            <span className="font-display text-lg font-black uppercase leading-none sm:text-xl">Ideas</span>
            <span className="text-lg font-medium">→ live</span>
          </div>
        </div>

        <div id="works" className="relative z-20 -mt-7 grid gap-3 pl-0 sm:-mt-12 sm:pl-[25%] lg:pl-[28%]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {capabilities.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className="flex min-h-24 flex-col justify-between border border-border bg-background/90 p-3 backdrop-blur-md sm:min-h-28 sm:p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">0{index + 1}</span>
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <p className="text-lg font-bold uppercase leading-none sm:text-xl">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <article className="project-tile project-tile-light flex min-h-44 flex-col justify-end border border-border p-5 sm:min-h-56 sm:p-6">
              <div>
                <p className="text-lg text-muted-foreground">Продуктовый лендинг</p>
                <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-5xl">
                  Нейро / студия
                </h2>
              </div>
            </article>
            <article className="project-tile project-tile-violet flex min-h-44 flex-col justify-end border border-border p-5 text-primary-foreground sm:min-h-56 sm:p-6">
              <div>
                <p className="text-lg opacity-80">AI-сервис</p>
                <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-5xl">
                  Flow / OS
                </h2>
              </div>
            </article>
          </div>

        </div>

        <p className="edge-label edge-label-left absolute left-1 top-1/2 hidden text-lg uppercase text-muted-foreground xl:block">
          Вайбкодинг
        </p>
        <p className="edge-label edge-label-right absolute right-1 top-1/2 hidden text-lg uppercase text-muted-foreground xl:block">
          Портфолио
        </p>
      </section>

      <section
        id="featured-projects"
        aria-labelledby="featured-title"
        className="relative mx-auto mt-6 max-w-[1440px] border border-border bg-card p-5 sm:p-7 lg:mt-8 lg:p-10"
      >
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-medium uppercase text-primary">Проекты</p>
            <h2
              id="featured-title"
              className="font-display text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl lg:text-6xl"
            >
              Избранные<br className="sm:hidden" /> проекты
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground">
            Три кейса, в которых дизайн, код и AI работают на результат.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map(({ id, title, description, tags, icon: Icon }) => (
            <article
              key={id}
              className="project-card group flex flex-col overflow-hidden rounded-xl"
            >
              <div className="project-preview relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border">
                <div className="absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden="true">
                  <div className="hero-grid absolute inset-0 opacity-60" />
                </div>
                <Icon className="relative z-10 size-14 text-primary drop-shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-2xl font-black uppercase leading-none text-foreground sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 text-lg leading-snug text-muted-foreground">
                  {description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-background/80 px-3 py-1 text-base font-medium text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        aria-labelledby="services-title"
        className="relative mx-auto mt-6 max-w-[1440px] border border-border bg-card p-5 sm:p-7 lg:mt-8 lg:p-10"
      >
        <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-medium uppercase text-primary">What I do</p>
            <h2
              id="services-title"
              className="font-display text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl lg:text-6xl"
            >
              Что я<br className="sm:hidden" /> делаю
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground">
            Четыре направления, в которых превращаю задачи бизнеса в работающие цифровые решения.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 lg:gap-5">
          {services.map(({ id, title, description, result, icon: Icon }) => (
            <article
              key={id}
              className="service-card group flex flex-col p-5 sm:p-6"
            >
              <div className="mb-5 flex size-12 items-center justify-center border border-border bg-background/80 text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase leading-none text-foreground break-words">
                {title}
              </h3>
              <p className="mt-3 text-lg leading-snug text-muted-foreground">
                {description}
              </p>
              <div className="mt-auto border-t border-border pt-4">
                <p className="text-lg font-semibold text-foreground">
                  {result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        aria-labelledby="process-title"
        className="relative mx-auto mt-6 max-w-[1440px] border border-border bg-card p-5 sm:p-7 lg:mt-8 lg:p-10"
      >
        <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-medium uppercase text-primary">How I work</p>
            <h2
              id="process-title"
              className="font-display text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl lg:text-6xl"
            >
              Как я<br className="sm:hidden" /> работаю
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground">
            Чёткий процесс от задачи до масштаба — быстро, прозрачно, с фокусом на результат.
          </p>
        </div>

        <ol className="process-timeline">
          {processSteps.map(({ id, title, description }, index) => (
            <li key={id} className="process-step">
              <span className="process-number">0{index + 1}</span>
              <h3 className="font-display text-[clamp(0.875rem,1.4vw,1.25rem)] font-black uppercase leading-[1.1] tracking-tight text-balance text-foreground break-words">
                {title}
              </h3>
              <p className="mt-3 text-lg leading-snug text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative mx-auto mt-6 max-w-[1440px] border border-border bg-card p-6 text-center sm:p-10 lg:mt-8 lg:p-14"
      >
        <p className="text-lg font-medium uppercase text-primary">Контакты</p>
        <h2
          id="contact-title"
          className="mx-auto mt-2 max-w-3xl font-display text-4xl font-black uppercase leading-[0.9] text-foreground sm:text-5xl lg:text-6xl"
        >
          Обсудим<br className="sm:hidden" /> ваш проект
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Напишите удобным способом — отвечу в течение дня и предложу план запуска.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 w-full rounded-full px-7 text-lg shadow-none sm:w-auto">
            <a href="https://t.me/vibecoder" target="_blank" rel="noopener noreferrer">
              <Send className="size-5" aria-hidden="true" /> Написать в Telegram
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-full px-7 text-lg shadow-none sm:w-auto"
          >
            <a href="mailto:hello@vibecoder.dev">
              <Mail className="size-5" aria-hidden="true" /> Написать на Email
            </a>
          </Button>
        </div>
      </section>
    </main>

  );
}
