import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/layout/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/layout/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/layout/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/layout/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/layout/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="UTF-8" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="author" content="Christophe LOZANO" />
        <meta property="og:image:width" content="920" />
        <meta property="og:image:height" content="470" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:Pizzeria Basilic"
          content="Baking delicious pizzas for everyone"
        />
        <meta
          name="keywords"
          content="pizza, nourriture, délicieux ,restaurant"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
