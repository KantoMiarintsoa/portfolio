import { getRequestConfig } from 'next-intl/server';
import { headers, cookies } from 'next/headers';

const locales = ['en', 'fr'] as const;

export default getRequestConfig(async () => {
  // Check cookie first for user's saved preference
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  let locale = 'en'; // Default fallback

  if (
    cookieLocale &&
    locales.includes(cookieLocale as (typeof locales)[number])
  ) {
    locale = cookieLocale;
  } else {
    // Get the locale from headers if no cookie
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');

    if (acceptLanguage) {
      const preferredLanguage = acceptLanguage
        .split(',')[0]
        .split('-')[0]
        .toLowerCase();

      if (locales.includes(preferredLanguage as (typeof locales)[number])) {
        locale = preferredLanguage;
      }
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
