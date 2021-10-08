import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function InfluencerCart() {
  return (
    <Layout>
      <Head>
        <title>Works - Influencer Cart</title>
      </Head>
      <main>
        <h1>Influencer Cart</h1>

        <Link href="/">
          <a>Back to home</a>
        </Link>
      </main>
    </Layout>
  );
}
