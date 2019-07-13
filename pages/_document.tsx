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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;