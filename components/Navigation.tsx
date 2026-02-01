'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">◈</span>
          <span className="font-semibold">Kanto Sarobidy</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm items-center">
          <a href="#home" className="hover:text-white transition">
            {t('home')}
          </a>
          <a href="#projects" className="hover:text-white transition">
            {t('projects')}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {t('contact')}
          </a>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
