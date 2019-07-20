import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class Doc extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            margin: 0,
          }}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Darker+Grotesque:400,500,700,800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Prompt:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
