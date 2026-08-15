"use client";

import { createElement } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  var gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (!gaId) {
    return null;
  }

  var scriptSrc = "https://www.googletagmanager.com/gtag/js?id=" + gaId;
  var inlineCode =
    "window.dataLayer = window.dataLayer || [];" +
    "function gtag(){dataLayer.push(arguments);}" +
    "gtag('js', new Date());" +
    "gtag('config', '" + gaId + "');";

  return createElement(
    "div",
    null,
    createElement(Script, { src: scriptSrc, strategy: "afterInteractive" }),
    createElement(
      Script,
      { id: "google-analytics", strategy: "afterInteractive" },
      inlineCode
    )
  );
}