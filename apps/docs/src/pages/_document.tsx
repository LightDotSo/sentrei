import Document, { Html, Head, Main, NextScript } from "next/document";

import type { ReactElement } from "react";

export class CustomDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <body className="text-white dark:text-black bg-white dark:bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
