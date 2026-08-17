"use client";

import { useEffect } from "react";

type ScrollToTopProps = {
  trigger: string;
};

export default function ScrollToTop({
  trigger,
}: ScrollToTopProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [trigger]);

  return null;
}