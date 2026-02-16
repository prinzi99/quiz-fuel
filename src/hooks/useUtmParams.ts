const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'utm_params';

export type UtmParams = Record<typeof UTM_KEYS[number], string>;

export function getUtmParams(): UtmParams {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return { utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '' };
}

export function captureUtmParams(): UtmParams {
  const url = new URL(window.location.href);
  const hasUtm = UTM_KEYS.some(k => url.searchParams.has(k));
  if (hasUtm) {
    const params: UtmParams = getUtmParams();
    for (const key of UTM_KEYS) {
      const val = url.searchParams.get(key);
      if (val) params[key] = val;
    }
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params)); } catch {}
    return params;
  }
  return getUtmParams();
}

export function useUtmParams(): UtmParams {
  return captureUtmParams();
}
