const safeJsonParse = (raw,fallback) => {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  };
  
  export const loadLocal = (key,fallback) => {
    if (typeof window === 'undefined') return fallback;
    const raw = window.localStorage.getItem(key);
    if (raw == null) return fallback;
    return safeJsonParse(raw,fallback);
  };
  
  export const saveLocal = (key,value) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key,JSON.stringify(value));
  };
  