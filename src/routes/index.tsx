import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  MousePointer2,
  Sparkles,
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

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:w-[54%] lg:p-8">
              <p className="max-w-xl text-[20px] font-medium leading-[1.35] text-foreground sm:text-[22px]">
                Собираю цифровые продукты с характером — от первой идеи до живого интерфейса.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-5 h-12 rounded-full px-6 text-lg shadow-none"
              >
                <a href="#works">
                  Смотреть работы <ArrowUpRight className="size-5" />
                </a>
              </Button>
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
            <article className="project-tile project-tile-light flex min-h-44 flex-col justify-between border border-border p-5 sm:min-h-56 sm:p-6">
              <span className="text-lg font-medium">Selected / 01</span>
              <div>
                <p className="text-lg text-muted-foreground">Продуктовый лендинг</p>
                <h2 className="font-display text-3xl font-black uppercase leading-none sm:text-5xl">
                  Нейро / студия
                </h2>
              </div>
            </article>
            <article className="project-tile project-tile-violet flex min-h-44 flex-col justify-between border border-border p-5 text-primary-foreground sm:min-h-56 sm:p-6">
              <span className="text-lg font-medium">Selected / 02</span>
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
    </main>
  );
}