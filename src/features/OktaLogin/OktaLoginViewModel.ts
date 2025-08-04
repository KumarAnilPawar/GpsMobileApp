import { useState } from 'react';
import { OktaUser } from './types';

export function useOktaLoginViewModel() {
  const [user, setUser] = useState<OktaUser | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string,) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({ id: '1', email, name: 'Demo User' });
      setLoading(false);
    }, 1000);
  };

  return { user, loading, login };
}