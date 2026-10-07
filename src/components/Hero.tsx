import { ArrowRight, Calendar, CheckCircle, Heart, MapPin, Shield, Sun, Video } from "lucide-react";
import { Button, ButtonLink, Container } from "./ui";

export function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-sage-100/70 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-sand-200/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-cream-100" />
      </div>

      <Container className="grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-16">
        {/* Copy */}
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white/70 py-1.5 pl-1.5 pr-4 text-[13px] font-medium text-sage-700 shadow-sm backdrop-blur animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage-600 text-cream-50">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            Santa Monica, CA &amp; Statewide Telehealth
          </span>

          <h1
            className="mt-7 font-serif text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] animate-fade-up"
            style={{ animationDelay: "90ms" }}
          >
            Anxiety, Trauma &amp; Burnout Therapy in{" "}
            <span className="relative inline-block italic font-normal text-sage-600">
              Santa Monica, CA
              <svg
                className="absolute -bottom-1 left-0 h-3 w-full text-sage-300"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M2 9C50 3 120 2 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-[17px] leading-[1.75] text-ink-soft sm:text-lg animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            You don't have to navigate chronic exhaustion, perfectionism, or the weight of past experiences on your
            own. In our quiet, sunlit Santa Monica office or through secure California telehealth, we will work
            collaboratively to help your mind and body feel grounded again.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "270ms" }}
          >
            <Button size="lg" onClick={onBook}>
              <Calendar className="h-4 w-4" />
              Schedule a Free 15-Minute Consultation
            </Button>
            <ButtonLink size="lg" variant="secondary" href="#specialties">
              Explore Specialties
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>

          <ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-soft animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            {["Licensed Clinical Psychologist (PsyD)", "HIPAA-compliant telehealth", "Free 15-min consult"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-sage-500" />
                  {t}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="relative mx-auto max-w-[540px]">
            {/* Decorative frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2.25rem] border border-sand-200/80 bg-white/40" />
            <div className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-sage-200/50 blur-2xl" />

            <div className="grain relative overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src="/images/office.jpg"
                alt="Sunlit, calming therapy office in Santa Monica with soft sage and cream furnishings"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.6]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/45 via-transparent to-transparent" />

              {/* Top label */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-cream-100/90 px-3.5 py-1.5 text-xs font-medium text-sage-700 backdrop-blur">
                <Sun className="h-3.5 w-3.5" />
                The Santa Monica office · Abundant natural light
              </div>

              {/* Bottom caption */}
              <div className="absolute inset-x-5 bottom-5 text-cream-50">
                <p className="font-serif text-2xl leading-tight">A quiet, private sanctuary</p>
                <p className="mt-1 text-sm text-cream-100/85">123th Street 45 W · Santa Monica, CA 90401</p>
              </div>
            </div>

            {/* Floating trust metrics */}
            <div className="absolute -left-4 top-[28%] hidden animate-float rounded-2xl border border-sand-200 bg-cream-50/95 p-4 shadow-lift backdrop-blur sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                  <Video className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">In-Person &amp; Telehealth</p>
                  <p className="text-xs text-ink-muted">Santa Monica · All of California</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-3 bottom-[22%] hidden animate-float rounded-2xl border border-sand-200 bg-cream-50/95 p-4 shadow-lift backdrop-blur sm:block lg:-right-8"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sand-200 text-sage-700">
                  <Shield className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">Evidence-Based</p>
                  <p className="text-xs text-ink-muted">CBT · EMDR · Somatic</p>
                </div>
              </div>
            </div>

            {/* Mobile metrics */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
              <div className="flex items-center gap-2.5 rounded-2xl border border-sand-200 bg-cream-50 p-3">
                <Video className="h-5 w-5 shrink-0 text-sage-600" />
                <p className="text-xs font-medium text-ink">In-Person &amp; Telehealth</p>
              </div>
              <div className="flex items-center gap-2.5 rounded-2xl border border-sand-200 bg-cream-50 p-3">
                <Shield className="h-5 w-5 shrink-0 text-sage-600" />
                <p className="text-xs font-medium text-ink">Evidence-Based: CBT &amp; EMDR</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Modalities strip */}
      <Container className="pb-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-sand-200/80 py-5 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-muted">
          <span className="flex items-center gap-2">
            <Heart className="h-3.5 w-3.5 text-sage-400" />
            CBT
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-sand-400 sm:block" />
          <span>EMDR</span>
          <span className="hidden h-1 w-1 rounded-full bg-sand-400 sm:block" />
          <span>Mindfulness-Based</span>
          <span className="hidden h-1 w-1 rounded-full bg-sand-400 sm:block" />
          <span>Somatic / Body-Oriented</span>
        </div>
      </Container>
    </section>
  );
}
