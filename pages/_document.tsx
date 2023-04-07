import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-black">
      {/* Import fonts from Adobe and Google */}
      <link rel="stylesheet" href="https://use.typekit.net/nnh8xid.css"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik+Vinyl&display=swap"></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
