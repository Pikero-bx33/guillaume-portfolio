"use client";

import { useEffect } from "react";

export default function LocaleScrollRestorer() {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem(
      "locale-switch-scroll"
    );

    if (!savedScroll) {
      return;
    }

    const scrollY = Number(savedScroll);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollY,
          behavior: "instant",
        });

        sessionStorage.removeItem("locale-switch-scroll");
      });
    });
  }, []);

  return null;
}

/* 
Utilisateur à scrollY = 1240 px
        ↓
clic FR → EN
        ↓
sessionStorage = 1240
        ↓
navigation vers la même page EN
        ↓
page rendue
        ↓
scrollTo(1240)
*/