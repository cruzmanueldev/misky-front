"use client";
import { useEffect, useRef } from "react";
import { getCookie } from "@/utils/cookies";


const COOKIE_NAME = "cookie_consent_v1";


function injectGtag(measurementId) {

  console.log('inyectando');
  if (!measurementId) return;
  if (typeof window === "undefined") return;
  if (window.__GA_LOADED__) return;
  window.__GA_LOADED__ = true;


  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);


  const inline = document.createElement("script");
  inline.innerHTML = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
`;
  document.head.appendChild(inline);
}


export default function AnalyticsLoader({ gaMeasurementId }) {
  const loadedRef = useRef(false);


  useEffect(() => {
    function maybeLoad() {
      const raw = getCookie(COOKIE_NAME);
      if (!raw) return;
      try {
        const parsed = JSON.parse(raw);
        if (parsed.analytics && !loadedRef.current) {
          injectGtag(gaMeasurementId);
          loadedRef.current = true;
        }
      } catch (e) {}
    }

    maybeLoad();

    function onConsent(e) {
      maybeLoad();
    }
    window.addEventListener("cookieConsentChanged", onConsent);
    return () => window.removeEventListener("cookieConsentChanged", onConsent);
  }, [gaMeasurementId]);


  return null;
}