import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

const Exm = () => {
  return (
    <Layout>
      <Head>
        <title>Works - Executive Mafia</title>
      </Head>

      <main>
        <h1>Executive Mafia</h1>

        <Link href="/">Back to Home</Link>
      </main>
    </Layout>
  );
};

export default Exm;
