import { Head, Html, Main, NextScript } from 'next/document';

import globalStyles from '@/styles/globals';
import { getCssText } from '@/styles/theme';

export default function Document() {
  const allStyles = globalStyles() + getCssText();

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: allStyles }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
