import { useEffect } from 'react';

let quentnLoaded = false;
let quentnLoading = false;

export const useLoadQuentnScript = () => {
  useEffect(() => {
    if (quentnLoaded || quentnLoading) return;
    quentnLoading = true;

    const script = document.createElement('script');
    script.src = 'https://assets.quentn.com/fb/0.2/dist-user-wc/embed-form.umd.min.js';
    script.async = true;
    script.onload = () => {
      quentnLoaded = true;
    };
    document.head.appendChild(script);
  }, []);
};
