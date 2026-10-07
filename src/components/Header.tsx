import { useEffect, useState } from "react";
import { Calendar, MapPin, Menu, Phone, Sparkles, Video, X } from "lucide-react";
import { NAV_LINKS, PRACTICE } from "../data";
import { Button, Container } from "./ui";
import { cn } from "../utils/cn";

export function Topbar() {
  return (
    <div className="relative z-40 border-b border-sage-700/40 bg-sage-700 text-cream-100">
      <Container className="flex items-center justify-between gap-4 py-2.5 text-[13px]">
        <p className="flex items-center gap-2 leading-snug">
          <Sparkles className="hidden h-3.5 w-3.5 shrink-0 text-sage-200 sm:block" />
          <span>
            <span className="font-medium">Now accepting new in-person clients in Santa Monica</span>
            <span className="text-sage-100/80"> &amp; virtual sessions across California.</span>
          </span>
        </p>
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <a
            href={`tel:${PRACTICE.phone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-sage-100/90 transition hover:bg-sage-600 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            {PRACTICE.phone}
          </a>
          <a
            href="#office"
            className="inline-flex items-center gap-1.5 rounded-full border border-sage-500/60 bg-sage-600/60 px-3 py-1 font-medium text-cream-50 transition hover:bg-sage-600"
          >
            <MapPin className="h-3.5 w-3.5 text-sage-200" />
            Santa Monica, CA
          </a>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sage-500/60 px-3 py-1 text-sage-100/90">
            <Video className="h-3.5 w-3.5 text-sage-200" />
            CA Telehealth
          </span>
        </div>
      </Container>
    </div>
  );
}

export function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-sand-200/80 bg-cream-100/85 shadow-[0_8px_30px_-16px_rgba(62,92,78,0.25)] backdrop-blur-xl"
          : "bg-cream-100/0"
      )}
    >
      <Container className="flex items-center justify-between py-4 lg:py-5">
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-sage-600 text-cream-50 shadow-soft transition group-hover:bg-sage-700">
            <span className="font-serif text-lg font-medium italic">MR</span>
            <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-sage-400/40" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[17px] font-medium tracking-tight text-ink sm:text-lg">
              {PRACTICE.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-sage-500">
              Clinical Psychologist
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-[15px] text-ink-soft transition hover:bg-sage-50 hover:text-sage-700"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button onClick={onBook} className="hidden sm:inline-flex">
            <Calendar className="h-4 w-4" />
            Book Free Consult
          </Button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white/70 text-ink transition hover:border-sage-300 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-cream-100 shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-sand-200 px-6 py-5">
            <span className="font-serif text-lg font-medium text-ink">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 py-6">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                className={cn(
                  "rounded-2xl px-4 py-3.5 font-serif text-2xl text-ink transition-all duration-500 hover:bg-sage-50 hover:text-sage-700",
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4 border-t border-sand-200 px-6 py-6">
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                onBook();
              }}
            >
              <Calendar className="h-4 w-4" />
              Book Free Consult
            </Button>
            <div className="space-y-1.5 text-sm text-ink-soft">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sage-500" />
                {PRACTICE.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sage-500" />
                {PRACTICE.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
