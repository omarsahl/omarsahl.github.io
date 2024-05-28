import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Omar Sahl',
  description: 'Omar Sahl — Software Engineer',
  creator: 'Omar Sahl',
  manifest: '/metadata/site.webmanifest',
  icons: {
    icon: [
      { url: '/metadata/favicon.ico', sizes: 'any' },
      {
        url: '/metadata/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/metadata/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      { url: '/metadata/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/metadata/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/metadata/apple-touch-icon.png', sizes: '180x180' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${inter.className} leading-relaxed text-gray-400 antialiased selection:bg-rose-600 selection:text-white`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-FK27GLEN8S" />
    </html>
  );
}
