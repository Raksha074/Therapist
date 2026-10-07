import { useEffect } from "react";
import { Clock, X } from "lucide-react";
import { ConsultForm } from "./ConsultForm";
import { cn } from "../utils/cn";

export function ConsultModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-modal-title"
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[2rem] bg-cream-100 shadow-lift transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:rounded-[2rem]",
          open ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-8 opacity-0 sm:translate-y-0 sm:scale-95"
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-sand-200 bg-cream-50 px-6 py-5 sm:px-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sage-600">
              <Clock className="h-3.5 w-3.5" />
              Free · 15 minutes
            </span>
            <h2 id="consult-modal-title" className="mt-1.5 font-serif text-2xl font-medium text-ink">
              Book your free consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-white text-ink transition hover:border-sage-300 hover:bg-sage-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <ConsultForm compact onDone={onClose} />
        </div>
      </div>
    </div>
  );
}
