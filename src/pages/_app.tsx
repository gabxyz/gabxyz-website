import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Layout from '@/components/layout';
import '@/styles/globals.css';

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
