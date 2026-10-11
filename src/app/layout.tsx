import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LensVault | Premium Stock Photography',
  description:
    'Award-winning stock photography for creatives, agencies, and brands. Discover breathtaking visuals across nature, architecture, people, and more.',
  keywords: 'stock photography, premium photos, creative assets, high resolution images',
  openGraph: {
    title: 'LensVault | Premium Stock Photography',
    description: 'Award-winning stock photography for creatives, agencies, and brands.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LensVault | Premium Stock Photography',
    description: 'Award-winning stock photography for creatives, agencies, and brands.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-900 text-white antialiased">{children}</body>
    </html>
  )
}
