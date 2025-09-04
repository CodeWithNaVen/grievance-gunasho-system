'use client';
import { Toggle } from '@carbon/react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      labelA="Light"
      labelB="Dark"
      id="theme-toggle"
      toggled={theme === 'g90'}
      onToggle={toggleTheme}
    />
  );
}
