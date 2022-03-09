import '@/styles/reset.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import TheFooter from '@/components/the-footer';
import TheHeader from '@/components/the-header';
import { TheWrapper, TheWrapperContent } from '@/components/the-wrapper';
import { standardTheme } from '@/styles/themes';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={standardTheme}>
        <Head>
          <title>My App</title>
          <meta name="description" content="My website description goes here." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TheWrapper>
          <TheHeader />

          <TheWrapperContent>
            <Component {...pageProps} />
          </TheWrapperContent>

          <TheFooter />
        </TheWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
