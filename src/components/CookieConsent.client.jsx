"use client";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils/cookies";

const COOKIE_NAME = "cookie_consent_v1";
const COOKIE_EXPIRES_DAYS = 365;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState({
    analytics: false,
  });

  useEffect(() => {
    const existing = getCookie(COOKIE_NAME);
    if (!existing) {
      setVisible(true);
    } else {
      try {
        const parsed = JSON.parse(existing);
        setPrefs({
          necessary: true,
          analytics: !!parsed.analytics,
        });
      } catch (e) {
        setVisible(true);
      }
    }
  }, []);

  function saveAndClose(newPrefs) {
    const toSave = {
      analytics: !!newPrefs.analytics,
      ts: new Date().toISOString(),
    };
    setCookie(COOKIE_NAME, JSON.stringify(toSave), COOKIE_EXPIRES_DAYS);

    try {
      window.dispatchEvent(
        new CustomEvent("cookieConsentChanged", { detail: toSave })
      );
    } catch (e) { }

    setPrefs(toSave);
    setVisible(false);
    setShowPrefs(false);
  }

  function acceptAll() {
    saveAndClose({ analytics: true });
  }

  function rejectAll() {
    saveAndClose({ analytics: false });
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-2 md:bottom-4 left-0 md:left-4 z-40 pointer-events-auto max-w-sm">
      <div className="bg-[#683910] text-white px-4 py-2 rounded-xl border-2 border-white shadow-lg">
        {!showPrefs ? (
          <>
            <p className="font-semibold text-sm !mb-2">Control de cookies</p>
            <p className="text-sm !mb-1">
              Usamos solo cookies analíticas opcionales para mejorar este sitio.
            </p>

            <div className="flex gap-2 mt-4">
              <button onClick={rejectAll} className="px-3 py-1 rounded border bg-white !text-black !text-sm">
                Rechazar
              </button>
              <button
                onClick={acceptAll}
                className="px-3 py-1 rounded bg-[#0CAFE6] !text-white !text-sm"
              >
                Aceptar todo
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
