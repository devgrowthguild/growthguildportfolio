import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const id = hash.slice(1);
    if (id) {
      // A hash link may arrive via a full cross-page navigation (or a fresh
      // tab) rather than in-app routing, so the target section can still be
      // rendering when this effect runs — retry briefly instead of giving up.
      let attempts = 0;
      let timer: ReturnType<typeof setTimeout>;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        } else if (attempts++ < 20) {
          timer = setTimeout(tryScroll, 50);
        }
      };
      tryScroll();
      return () => clearTimeout(timer);
    }

    if (navType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, navType]);

  return null;
};
