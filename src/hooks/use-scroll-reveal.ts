import { useEffect } from "react";

/**
 * Premium reveal system.
 *
 * - `.reveal` — root container fades/slides in once in view.
 * - Direct children (or any descendants marked `.reveal-child`) are staggered
 *   in sequence (0.07s gap) for an orchestrated, Apple-like reveal.
 * - Headlines marked `.reveal-words` animate word-by-word.
 * - Respects `prefers-reduced-motion`.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Split `.reveal-words` headlines into per-word spans (idempotent).
    document.querySelectorAll<HTMLElement>(".reveal-words").forEach((el) => {
      if (el.dataset.split === "1") return;
      const text = el.textContent ?? "";
      el.dataset.split = "1";
      el.innerHTML = text
        .split(/(\s+)/)
        .map((chunk) =>
          /\s+/.test(chunk)
            ? chunk
            : `<span class="reveal-word"><span class="reveal-word-inner">${chunk}</span></span>`,
        )
        .join("");
    });

    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    if (reduced) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const root = entry.target as HTMLElement;
            root.classList.add("is-visible");

            // Stagger any descendants tagged `.reveal-child` or per-word spans.
            const children = root.querySelectorAll<HTMLElement>(
              ".reveal-child, .reveal-word",
            );
            children.forEach((child, i) => {
              child.style.transitionDelay = `${Math.min(i * 0.07, 0.6)}s`;
              child.classList.add("is-visible");
            });

            io.unobserve(root);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}