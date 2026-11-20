import type { Metadata, Viewport } from 'next';
import { Figtree, Noto_Nastaliq_Urdu } from 'next/font/google';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  display: 'swap',
});

// Urdu: Noto Nastaliq Urdu, per the Dua Hospital brand guidelines (Figma, 02 Typography).
// Variable font, 400–700: Regular body, Medium captions, SemiBold subheads, Bold headlines.
const urdu = Noto_Nastaliq_Urdu({
  subsets: ['arabic'],
  weight: 'variable',
  variable: '--font-ur',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Dr. Hasan Aziz — Consultant Physician & Medical Specialist in Multan',
    template: '%s | Dr. Hasan Aziz',
  },
  applicationName: 'Dr. Hasan Aziz',
  category: 'health' as Metadata['category'],
  icons: { icon: '/icon.svg' },
  formatDetection: { telephone: false, address: true, email: false },
};

export const viewport: Viewport = {
  themeColor: '#074EA2',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${figtree.variable} ${urdu.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
