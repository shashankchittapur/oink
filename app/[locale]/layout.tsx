import SiteHeader from '@/components/site-header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import { notFound } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oink Solutions',
  description: 'Oink Solutions is a software development company based in the United States. We specialize in building web applications and websites for small businesses.',
}


const locales = ['en', 'de', 'fr', 'es'];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode,
  params: { locale: string },
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <SiteHeader />
          {children}
          <Toaster />
          <SiteFooter />
        </ThemeProvider>

      </body>
    </html >
  )
}
