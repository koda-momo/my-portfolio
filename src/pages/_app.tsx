import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { useMakeTitle } from "../hooks/useMakeTitle";

function MyApp({ Component, pageProps }: AppProps) {
  const { makeTitle } = useMakeTitle();

  return (
    <>
      <Head>
        <title>portfolio:{makeTitle()}</title>
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
