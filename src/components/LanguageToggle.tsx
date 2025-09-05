'use client';
import { Button } from '@carbon/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // mark that we're on the client
  }, []);

  if (!mounted) return null; // do not render on server

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'np' : 'en');
  };

  return (
    <Button kind="ghost" size="sm" onClick={toggleLang}>
      {i18n.language === 'en' ? 'NP' : 'EN'}
    </Button>
  );
}
