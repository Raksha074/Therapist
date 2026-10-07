import { ArrowRight, Heart } from "lucide-react";
import { EMPATHY_CARDS } from "../data";
import { Container, SectionHeading } from "./ui";

export function IsThisYou({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Is this you?"
            title="Therapy for High-Achievers Who Feel Quietly Overwhelmed"
            description="You're the one people rely on. You get things done. And yet, underneath the competence, something feels tight, tired, or unresolved. If any of these sound familiar, you're in the right place."
          />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted lg:text-right">
            Designed for entrepreneurs, creatives, and professionals who look fine on paper — and are exhausted on
            the inside.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {EMPATHY_CARDS.map((card, i) => (
            <article
              key={card.number}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white/70 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-lift sm:p-8"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sage-100/0 blur-2xl transition-all duration-700 group-hover:bg-sage-100/80"
                aria-hidden
              />
              <div className="flex items-center justify-between">
                <span className="font-serif text-4xl font-light italic text-sand-400 transition-colors group-hover:text-sage-400">
                  {card.number}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-cream-100 text-sage-500 transition group-hover:bg-sage-600 group-hover:text-cream-50">
                  <Heart className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-6 font-serif text-[1.45rem] font-medium leading-snug text-ink">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{card.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {card.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-cream-200 px-3 py-1 text-xs font-medium text-ink-soft transition group-hover:bg-sage-50 group-hover:text-sage-700"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-auto pt-6 text-xs font-medium uppercase tracking-[0.16em] text-sand-500">
                {i === 0 ? "Anxiety" : i === 1 ? "Burnout" : "Trauma"}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-sage-50/80 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-2xl font-serif text-xl leading-snug text-sage-800 sm:text-2xl">
            "Functioning" and "feeling okay" are not the same thing. You deserve both.
          </p>
          <button
            onClick={onBook}
            className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-medium text-sage-700 transition hover:text-sage-900"
          >
            Start with a free consult
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 text-cream-50 transition group-hover:translate-x-1 group-hover:bg-sage-700">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
}
