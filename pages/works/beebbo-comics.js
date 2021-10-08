import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

const Beebbo = () => {
  return (
    <Layout>
      <Head>
        <title>Works - Beebbo Comics</title>
      </Head>

      <main>
        <h1>Beebbo Comics</h1>

        <Link href="/">Back to Home</Link>
      </main>
    </Layout>
  );
};

export default Beebbo;
