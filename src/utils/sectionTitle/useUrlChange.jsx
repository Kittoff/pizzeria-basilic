import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * Custom hook to detect URL changes using Next.js useRouter.
 * @returns {boolean} - True if the URL has changed, otherwise false.
 */
export const useUrlChange = () => {
  const [urlChanged, setUrlChanged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Check if the new URL is different from the current one
      if (router.asPath !== url) {
        setUrlChanged(true);
        // Log or execute any other code when the URL changes
      }
    };

    // Listen to route changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up event listener
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.asPath, router.events]); // Re-run effect when asPath changes

  return urlChanged;
};
