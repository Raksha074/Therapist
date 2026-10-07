import { Heart, Mail, MapPin, Phone, ShieldAlert, Video } from "lucide-react";
import { NAV_LINKS, PRACTICE, SPECIALTIES } from "../data";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-cream-200/60">
      <Container className="py-14">
        {/* Crisis notice */}
        <div className="mb-12 flex flex-col gap-4 rounded-3xl border border-sand-300 bg-cream-50 p-6 sm:flex-row sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand-200 text-sage-700">
            <ShieldAlert className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">If you are in crisis or thinking about harming yourself,</span>{" "}
            please do not wait for a reply here. Call or text <span className="font-semibold text-ink">988</span> (Suicide
            &amp; Crisis Lifeline), call 911, or go to your nearest emergency room. This website is not monitored 24/7
            and is not a substitute for emergency care.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage-600 font-serif text-lg italic text-cream-50">
                MR
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-medium text-ink">{PRACTICE.name}</span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-sage-500">
                  Clinical Psychologist
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Anxiety, trauma (EMDR), and burnout therapy for high-achieving adults — in person in Santa Monica and via
              secure telehealth throughout California.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-xs text-ink-soft">
                <MapPin className="h-3 w-3 text-sage-500" /> Santa Monica, CA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-1 text-xs text-ink-soft">
                <Video className="h-3 w-3 text-sage-500" /> California Telehealth
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">Navigate</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ink-soft transition hover:text-sage-700">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-ink-soft transition hover:text-sage-700">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">Specialties</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SPECIALTIES.map((s) => (
                <li key={s.id}>
                  <a href="#specialties" className="text-ink-soft transition hover:text-sage-700">
                    {s.eyebrow}
                  </a>
                </li>
              ))}
              <li className="text-ink-soft">CBT · EMDR · Somatic</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-600">Office</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-500" />
                <span>
                  {PRACTICE.addressLine1}
                  <br />
                  {PRACTICE.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-sage-500" />
                <a href={`tel:${PRACTICE.phone.replace(/\D/g, "")}`} className="hover:text-sage-700">
                  {PRACTICE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-sage-500" />
                <a href={`mailto:${PRACTICE.email}`} className="hover:text-sage-700">
                  {PRACTICE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-300/70 pt-6">
          <p className="text-xs leading-relaxed text-ink-muted">
            Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist in the State of California (License No.{" "}
            {PRACTICE.license}). Services are provided to adults located in California only. The content on this site is
            for informational purposes and does not constitute psychological advice, diagnosis, or treatment, nor does it
            establish a therapist–client relationship. Telehealth sessions are conducted via a HIPAA-compliant platform.
          </p>
          <div className="mt-5 flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with <Heart className="h-3 w-3 text-sage-500" /> in Santa Monica · Privacy Policy · Good Faith Estimate
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
