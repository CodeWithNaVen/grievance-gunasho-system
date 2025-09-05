'use client';
import AppLayout from '@/components/AppLayout';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent server mismatch

  return (
    <AppLayout>
      <p>Welcome to the Gunaso citizen portal!</p>

      <h3>{t('submit_grievance')}</h3>
    </AppLayout>
  );
}
