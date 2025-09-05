'use client';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ClientTheme } from '@/components/ClientTheme';
import { AuthProvider } from '@/contexts/AuthContext';
import { I18nextProvider } from 'react-i18next';
import i18n from "@/i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <ClientTheme>{children}</ClientTheme>
        </I18nextProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
