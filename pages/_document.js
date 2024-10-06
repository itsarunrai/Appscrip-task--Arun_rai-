// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Link to Font Awesome stylesheet */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha384-DyZv2LZqLBg7Qh1HT7y6DPE0zZ+P2a+4FnUg18e6O3x2mTeiY5gBz4Jq7CjESB0G"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main /> {/* Renders the application’s main content */}
          <NextScript /> {/* Loads Next.js scripts */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
