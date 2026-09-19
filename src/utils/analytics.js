export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return; // sin consentimiento
  window.gtag("event", name, params);
}