import { useEffect } from "react";

export default function useScrollIntoView() {
  useEffect(() => {
    const element =
      window.location.hash && document.querySelector(window.location.hash);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
}
