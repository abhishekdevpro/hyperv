import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `window.chtlConfig = { chatbotId: "7533359378" }`
        }} />
        <script
          async
          data-id="7533359378"
          id="chtl-script"
          type="text/javascript"
          src="https://chatling.ai/js/embed.js"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 