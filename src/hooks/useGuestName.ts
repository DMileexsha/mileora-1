import { useState, useEffect } from 'react';
import { sanitizeString } from '../utils/sanitize';

export function useGuestName() {
  const [guestName, setGuestName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('guest');
    if (nameParam) {
      setGuestName(sanitizeString(nameParam));
    }
  }, []);

  return guestName;
}
