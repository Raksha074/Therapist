import { Award, BookOpen, Calendar, CheckCircle, Heart, Sparkles } from "lucide-react";
import { CREDENTIALS, PRACTICE } from "../data";
import { Button, Container, Eyebrow } from "./ui";

const CRED_ICONS = [Award, Sparkles, BookOpen, Heart];

export function About({ onBook }: { onBook: () => void }) {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Image + bio card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-sand-300/70" aria-hidden />
          <div className="grain relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src="/images/dr-maya.jpg"
              alt="Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative -mt-14 ml-6 mr-0 rounded-3xl border border-sand-200 bg-cream-50/95 p-6 shadow-lift backdrop-blur sm:ml-10 lg:-mt-16 lg:ml-12">
            <p className="font-serif text-xl italic leading-snug text-sage-700">"Warm, collaborative, and grounded."</p>
            <p className="mt-3 text-sm text-ink-muted">
              How clients most often describe working with {PRACTICE.shortName}.
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-sand-200 pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 font-serif text-sm italic text-cream-50">
                MR
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">{PRACTICE.name}</p>
                <p className="text-xs text-ink-muted">{PRACTICE.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <Eyebrow>About Dr. Maya Reynolds</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Practical tools, meaningful depth — and a therapist who actually gets it
          </h2>
          <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink-soft sm:text-[17px]">
            <p>
              I'm Dr. Maya Reynolds, a Licensed Clinical Psychologist (PsyD) based in Santa Monica, California. I
              work with high-achieving adults — entrepreneurs, creatives, and professionals — who have become experts
              at holding it together on the outside while feeling anxious, exhausted, or haunted by the past on the
              inside.
            </p>
            <p>
              My doctoral training as a PsyD was grounded in the practical, clinical application of evidence-based
              care. Over the years I've deepened that foundation with specialized training in EMDR, Cognitive
              Behavioral Therapy, mindfulness-based practices, and somatic, body-oriented techniques. What that means
              for you: we'll blend concrete tools you can use this week with the slower, deeper work of understanding
              why the patterns took hold in the first place.
            </p>
            <p>
              I believe therapy should feel like a real relationship — honest, collaborative, sometimes even
              lighthearted — inside a space that is unhurried and safe. You set the pace. I bring the structure,
              training, and steady presence.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {CREDENTIALS.map((c, i) => {
              const Icon = CRED_ICONS[i];
              return (
                <div
                  key={c}
                  className="group flex items-center gap-2.5 rounded-2xl border border-sand-200 bg-white/70 px-3.5 py-3 transition hover:border-sage-300 hover:bg-sage-50"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700 transition group-hover:bg-sage-600 group-hover:text-cream-50">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight text-ink">{c}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" onClick={onBook}>
              <Calendar className="h-4 w-4" />
              Book a Free Consult
            </Button>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-sage-500" /> Adults 18+
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-sage-500" /> Licensed in California
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
