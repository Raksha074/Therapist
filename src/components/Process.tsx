import { Calendar, ClipboardList, Clock, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "../data";
import { Button, Container, SectionHeading } from "./ui";

const ICONS = [Clock, ClipboardList, Sparkles];

export function Process({ onBook }: { onBook: () => void }) {
  return (
    <section id="approach" className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="A collaborative process"
          align="center"
          title="Three simple steps to getting started"
          description="No forms to decode, no pressure to commit. Just a clear, human path from “I think I need support” to feeling like yourself again."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div className="pointer-events-none absolute left-1/2 top-12 hidden h-px w-[66%] -translate-x-1/2 bg-gradient-to-r from-transparent via-sand-300 to-transparent lg:block" />

          <ol className="grid gap-6 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = ICONS[i];
              return (
                <li
                  key={s.step}
                  className="group relative flex flex-col rounded-3xl border border-sand-200 bg-white/70 p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-lift sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-600 text-cream-50 shadow-soft transition group-hover:bg-sage-700">
                      <Icon className="h-6 w-6" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cream-100 bg-sand-300 text-[11px] font-bold text-sage-800">
                        {i + 1}
                      </span>
                    </span>
                    <span className="font-serif text-4xl font-light italic text-sand-300">{s.step}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-[1.45rem] font-medium leading-snug text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-sand-200 bg-cream-100 px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={onBook}>
            <Calendar className="h-4 w-4" />
            Begin with Step One — It's Free
          </Button>
          <p className="mt-3 text-sm text-ink-muted">15 minutes · Phone or video · No obligation</p>
        </div>
      </Container>
    </section>
  );
}
