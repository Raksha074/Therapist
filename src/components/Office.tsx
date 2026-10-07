import { useState } from "react";
import { Building2, CheckCircle, Clock, Laptop, Lock, MapPin, Navigation, Sun, Video, Wifi } from "lucide-react";
import { PRACTICE } from "../data";
import { Container, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

type Mode = "office" | "telehealth";

const CONTENT: Record<
  Mode,
  {
    label: string;
    title: string;
    body: string;
    features: { icon: typeof Sun; title: string; text: string }[];
    note: string;
  }
> = {
  office: {
    label: "Santa Monica Office (In-Person)",
    title: "A quiet, private sanctuary filled with natural light",
    body: "The Santa Monica office was designed as a counterweight to the pace of your week — an uncluttered, softly furnished room where the light moves slowly across the walls and nothing demands your attention. Sessions here are unhurried and completely private.",
    features: [
      { icon: Sun, title: "Abundant natural light", text: "Large windows and warm, layered textures to help your body settle." },
      { icon: Lock, title: "Private & discreet", text: "Sound-insulated room and a calm, unshared waiting area." },
      { icon: Navigation, title: "Easy to reach", text: "Minutes from the 10 & PCH with nearby parking." },
      { icon: Clock, title: "Flexible hours", text: "Early-morning and evening in-person appointments available." },
    ],
    note: "Ideal for EMDR and somatic work, or if you simply want a dedicated place away from home and work.",
  },
  telehealth: {
    label: "Secure California Telehealth (Virtual)",
    title: "The same depth of care, from wherever in California you are",
    body: "Virtual sessions take place on a secure, HIPAA-compliant video platform — no downloads, no hassle. Many clients find telehealth makes consistency easier around travel, parenting, and demanding schedules, without sacrificing the quality of the work.",
    features: [
      { icon: Lock, title: "HIPAA-compliant", text: "Encrypted, private video sessions built for healthcare." },
      { icon: Wifi, title: "Simple to join", text: "One click from your phone, tablet, or laptop." },
      { icon: MapPin, title: "Statewide access", text: "Available to adults located anywhere in California." },
      { icon: Laptop, title: "EMDR-ready", text: "Virtual bilateral stimulation tools for trauma processing online." },
    ],
    note: "Available to clients in Los Angeles, the Bay Area, San Diego, Sacramento, and everywhere in between.",
  },
};

export function Office() {
  const [mode, setMode] = useState<Mode>("office");
  const c = CONTENT[mode];

  return (
    <section id="office" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-sage-700" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-sage-600/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sage-800/70 blur-3xl" />

      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            eyebrow="The Sanctuary"
            title={
              <>
                Your Santa Monica office — <span className="italic font-normal text-sage-200">and beyond</span>
              </>
            }
            description="Where you do this work matters. Choose the setting that feels right, or move between both as life changes."
          />
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-sage-500/70 bg-sage-800/50 px-4 py-2.5 text-sm text-cream-100 backdrop-blur">
            <MapPin className="h-4 w-4 text-sage-200" />
            {PRACTICE.address}
          </div>
        </div>

        {/* Toggle */}
        <div className="mt-12 inline-flex w-full rounded-full border border-sage-500/60 bg-sage-800/50 p-1.5 backdrop-blur sm:w-auto">
          {(Object.keys(CONTENT) as Mode[]).map((m) => {
            const Icon = m === "office" ? Building2 : Video;
            const active = mode === m;
            return (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300 sm:flex-none sm:px-5 sm:text-sm",
                  active ? "bg-cream-100 text-sage-800 shadow-soft" : "text-sage-100/80 hover:text-white"
                )}
                aria-pressed={active}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{CONTENT[m].label}</span>
                <span className="sm:hidden">{m === "office" ? "In-Person" : "Telehealth"}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            key={mode + "-img"}
            className="grain relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-lift animate-fade-up"
          >
            <img
              src="/images/office.jpg"
              alt="Calming Santa Monica therapy office interior"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-all duration-700",
                mode === "telehealth" && "scale-105 blur-[2px] brightness-75"
              )}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/70 via-sage-900/10 to-transparent" />
            {mode === "telehealth" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mx-6 w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-cream-100">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                      Secure session · Encrypted
                    </span>
                    <Lock className="h-4 w-4 text-cream-100/80" />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-100 font-serif italic text-sage-700">
                      MR
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-cream-50">Dr. Maya Reynolds</p>
                      <p className="text-xs text-cream-100/80">HIPAA-compliant video · California</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["Video", "Audio", "Chat"].map((x) => (
                      <span
                        key={x}
                        className="rounded-xl bg-white/10 py-2 text-center text-xs font-medium text-cream-100"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4">
              <div className="text-cream-50">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage-200">
                  {mode === "office" ? "Santa Monica, CA 90401" : "Anywhere in California"}
                </p>
                <p className="mt-1 font-serif text-2xl leading-tight">
                  {mode === "office" ? "123th Street 45 W" : "Secure telehealth"}
                </p>
              </div>
              <span className="hidden rounded-full bg-cream-100/90 px-3 py-1.5 text-xs font-medium text-sage-800 sm:inline-flex">
                {mode === "office" ? "In-Person" : "Virtual"}
              </span>
            </div>
          </div>

          <div key={mode + "-copy"} className="rounded-[2rem] border border-sage-500/50 bg-sage-800/40 p-7 backdrop-blur sm:p-9 animate-fade-up">
            <h3 className="font-serif text-2xl font-medium leading-snug text-cream-50 sm:text-3xl">{c.title}</h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-sage-100/85">{c.body}</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {c.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage-600 text-sage-100">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-cream-50">{f.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-sage-100/75">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-7 flex items-start gap-2 rounded-2xl bg-sage-900/40 p-4 text-[13px] leading-relaxed text-sage-100/85">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sage-200" />
              {c.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
