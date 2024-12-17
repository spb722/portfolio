import { useState, useEffect } from 'react';
import { setTheme, getInitialTheme } from '../utils/theme';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(getInitialTheme());

  useEffect(() => {
    setTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};