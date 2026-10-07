import { Clock, Mail, MapPin, Phone, Sparkles, Video } from "lucide-react";
import { PRACTICE } from "../data";
import { ConsultForm } from "./ConsultForm";
import { Container } from "./ui";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sand-200 bg-white/80 shadow-lift">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sage-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sand-200/80 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_1fr]">
            {/* Left copy */}
            <div className="flex flex-col justify-between bg-sage-700 p-8 text-cream-50 sm:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-sage-500 bg-sage-800/50 px-3.5 py-1.5 text-xs font-medium text-sage-100">
                  <Sparkles className="h-3.5 w-3.5 text-sage-200" />
                  Free 15-minute consultation
                </span>
                <h2 className="mt-6 font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  Let's find out if we're a good fit — <span className="italic font-normal text-sage-200">no pressure</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-sage-100/85 sm:text-base">
                  Share a little about what's going on and how you'd like to meet. I'll personally reply within one
                  business day to set up a short, relaxed call.
                </p>

                <ul className="mt-8 space-y-3 text-sm text-sage-100/90">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-200" />
                    <span>
                      {PRACTICE.addressLine1}
                      <br />
                      {PRACTICE.addressLine2}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Video className="h-4 w-4 shrink-0 text-sage-200" />
                    Secure telehealth across California
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-sage-200" />
                    <a href={`tel:${PRACTICE.phone.replace(/\D/g, "")}`} className="hover:text-white">
                      {PRACTICE.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-sage-200" />
                    <a href={`mailto:${PRACTICE.email}`} className="hover:text-white">
                      {PRACTICE.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-sage-200" />
                    Mon–Fri · Early morning &amp; evening slots available
                  </li>
                </ul>
              </div>

              <div className="mt-10 rounded-2xl border border-sage-500/60 bg-sage-800/40 p-5">
                <p className="font-serif text-lg italic leading-snug text-cream-50">
                  "The first call was the hardest part. Everything after felt like relief."
                </p>
                <p className="mt-2 text-xs text-sage-100/70">— Former client, Santa Monica (shared with permission)</p>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-12">
              <h3 className="font-serif text-2xl font-medium text-ink">Request your consultation</h3>
              <p className="mt-1.5 text-sm text-ink-muted">Takes about 60 seconds.</p>
              <div className="mt-7">
                <ConsultForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
