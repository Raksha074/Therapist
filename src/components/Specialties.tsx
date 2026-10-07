import { useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown, Flame, Shield, Waves } from "lucide-react";
import { SPECIALTIES } from "../data";
import { Container, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

const ICONS = { waves: Waves, shield: Shield, flame: Flame };

export function Specialties({ onBook }: { onBook: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="specialties" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-cream-200/70" />
      <Container>
        <SectionHeading
          eyebrow="Specialties"
          align="center"
          title={
            <>
              Focused, evidence-based care for what{" "}
              <span className="italic font-normal text-sage-600">you're</span> carrying
            </>
          }
          description="Every plan is built around your nervous system, your history, and your goals — drawing from CBT, EMDR, mindfulness, and somatic techniques."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SPECIALTIES.map((s, idx) => {
            const Icon = ICONS[s.icon];
            const open = openId === s.id;
            return (
              <article
                key={s.id}
                className={cn(
                  "group relative flex flex-col rounded-[1.75rem] border bg-cream-50 p-7 transition-all duration-500 sm:p-8",
                  open
                    ? "border-sage-300 shadow-lift"
                    : "border-sand-200 shadow-soft hover:-translate-y-1.5 hover:border-sage-200 hover:shadow-lift"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
                      idx === 0 && "bg-sage-100 text-sage-700 group-hover:bg-sage-600 group-hover:text-cream-50",
                      idx === 1 && "bg-sand-200 text-sage-700 group-hover:bg-sage-600 group-hover:text-cream-50",
                      idx === 2 && "bg-sage-50 text-sage-700 group-hover:bg-sage-600 group-hover:text-cream-50"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sand-500">
                    {s.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[1.5rem] font-medium leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[15px] italic text-sage-600">{s.short}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{s.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-sage-200 bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700"
                    >
                      <CheckCircle className="h-3 w-3" />
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Expandable details */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-2xl bg-cream-200/80 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-600">
                        What we'll work on
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {s.details.map((d) => (
                          <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={onBook}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 underline-offset-4 hover:underline"
                      >
                        Book a free consult for this
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOpenId(open ? null : s.id)}
                  aria-expanded={open}
                  className="mt-auto flex items-center justify-between border-t border-sand-200 pt-5 text-sm font-medium text-ink transition hover:text-sage-700"
                  style={{ marginTop: open ? "1.5rem" : undefined }}
                >
                  <span className="mt-2">{open ? "Show less" : "Learn more"}</span>
                  <span
                    className={cn(
                      "mt-2 flex h-8 w-8 items-center justify-center rounded-full border border-sand-200 transition-all duration-300",
                      open ? "rotate-180 bg-sage-600 text-cream-50 border-sage-600" : "group-hover:border-sage-300"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
