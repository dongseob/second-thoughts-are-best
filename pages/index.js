import Head from "next/head";
import Image from "next/image";

import Header from "./components/header";
import Main_bg from "./main_bg";

export default function Home() {
  return (
    <>
      <Head>
        <title>second thoughts are best</title>
        <meta name="description" content="second thoughts are best" />
        <link rel="icon" href="/images/second-thoghts-are-best_favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="남자옷, 남성의류, 패션, 스타일, 자체제작,"></meta>
        <meta property="og:title" content="second thoughts are best" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://second-thoughts-are-best.vercel.app/" />
      </Head>

      <Main_bg></Main_bg>
    </>
  );
}
