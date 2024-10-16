import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Next.js starter template',
  description:
    'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, Paraglide, testing tools and more. Jumpstart your project with efficiency and style.',
  keywords: [
    'Next.js',
    'React',
    'Next.js starter',
    'Next.js boilerplate',
    'Next.js starter template',
    'Tailwind CSS',
    'TypeScript',
    'Shadcn UI',
    'Next-auth',
    'Prisma',
  ],
  url: () => env.APP_URL,
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
