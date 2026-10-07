import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircleQuestion } from "lucide-react";
import { FAQS } from "../data";
import { Container, Eyebrow } from "./ui";
import { cn } from "../utils/cn";

export function FAQ({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-cream-200/70" />
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Frequently asked questions
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Reaching out is a big step. Here's what people most often want to know before they do.
          </p>
          <div className="mt-8 rounded-3xl border border-sand-200 bg-cream-50 p-6 shadow-soft">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-700">
              <MessageCircleQuestion className="h-5 w-5" />
            </span>
            <p className="mt-4 font-serif text-lg text-ink">Still have a question?</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-muted">
              The free consultation is exactly for this. Ask anything — logistics, fees, fit.
            </p>
            <button
              onClick={onBook}
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 hover:text-sage-900"
            >
              Ask on a free call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "overflow-hidden rounded-3xl border bg-cream-50 transition-all duration-300",
                  isOpen ? "border-sage-300 shadow-soft" : "border-sand-200 hover:border-sage-200"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="font-serif text-lg font-medium leading-snug text-ink sm:text-xl">{f.q}</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "rotate-180 border-sage-600 bg-sage-600 text-cream-50"
                        : "border-sand-200 bg-white text-ink-soft"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-sand-200/80 px-6 pb-6 pt-5 text-[15px] leading-[1.8] text-ink-soft sm:px-7">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
