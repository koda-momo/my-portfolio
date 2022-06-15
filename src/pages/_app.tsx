import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ここにタイトルを入れる</title>
        <meta name="description" content="サイトの説明を入れる" />
        {/* <link rel="icon" href="/images/favicon.jpg" /> */}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
