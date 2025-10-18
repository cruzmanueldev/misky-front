export function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Lax";
}


export function getCookie(name) {
  if (typeof document === "undefined") return null;
  const v = document.cookie.match("(?:^|;)\\s*" + name + "=([^;]*)");
  return v ? decodeURIComponent(v[1]) : null;
}