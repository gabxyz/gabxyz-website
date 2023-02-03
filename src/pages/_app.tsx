import '@/styles/globals.css';

import { Inter } from '@next/font/google';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Layout from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <TooltipProvider delayDuration={150}>
          <style jsx global>
            {`
              :root {
                --font-inter: ${inter.style.fontFamily};
              }
            `}
          </style>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}
