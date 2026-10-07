import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, CheckCircle, Loader2, Shield, Video } from "lucide-react";
import { cn } from "../utils/cn";
import { Button } from "./ui";

type Format = "in-person" | "telehealth" | "either";

const GOALS = ["Anxiety & panic", "Trauma / EMDR", "Burnout & perfectionism", "Not sure yet"];

export function ConsultForm({ compact = false, onDone }: { compact?: boolean; onDone?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState<string>("");
  const [format, setFormat] = useState<Format>("either");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !goal) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-700">
          <CheckCircle className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-medium text-ink">Thank you, {name.split(" ")[0]}.</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-soft">
          Your request has been received. Dr. Reynolds will personally reach out within one business day to schedule
          your free 15-minute consultation.
        </p>
        {onDone && (
          <Button variant="secondary" className="mt-6" onClick={onDone}>
            Close
          </Button>
        )}
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-sand-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/70 transition focus:border-sage-400 focus:outline-none focus:ring-4 focus:ring-sage-100";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-ink">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputCls}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputCls}
            autoComplete="email"
          />
        </label>
      </div>

      <div>
        <span className="mb-2 block text-[13px] font-medium text-ink">What would you like support with?</span>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => (
            <button
              type="button"
              key={g}
              onClick={() => setGoal(g)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all",
                goal === g
                  ? "border-sage-600 bg-sage-600 text-cream-50 shadow-soft"
                  : "border-sand-300 bg-white text-ink-soft hover:border-sage-300"
              )}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="mb-2 block text-[13px] font-medium text-ink">Preferred format</span>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { v: "in-person", label: "In-Person", sub: "Santa Monica", Icon: Building2 },
              { v: "telehealth", label: "Telehealth", sub: "California", Icon: Video },
              { v: "either", label: "Either", sub: "Flexible", Icon: CheckCircle },
            ] as const
          ).map(({ v, label, sub, Icon }) => (
            <button
              type="button"
              key={v}
              onClick={() => setFormat(v)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-2xl border px-2 py-3 text-center transition-all",
                format === v
                  ? "border-sage-600 bg-sage-50 text-sage-800 ring-2 ring-sage-200"
                  : "border-sand-300 bg-white text-ink-soft hover:border-sage-300"
              )}
            >
              <Icon className={cn("h-4 w-4", format === v ? "text-sage-700" : "text-ink-muted")} />
              <span className="text-[13px] font-semibold">{label}</span>
              <span className="text-[11px] text-ink-muted">{sub}</span>
            </button>
          ))}
        </div>
      </div>

      {!compact && (
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-ink">
            Anything you'd like me to know? <span className="font-normal text-ink-muted">(optional)</span>
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="A sentence or two is plenty."
            className={cn(inputCls, "resize-none")}
          />
        </label>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request My Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
      <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
        <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage-500" />
        Your information is confidential and never shared. Please don't include sensitive clinical details here — we'll
        talk on the call.
      </p>
    </form>
  );
}
