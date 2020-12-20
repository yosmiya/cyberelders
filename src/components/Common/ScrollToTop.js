import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export default function useScrollToTop() {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return null;
}
