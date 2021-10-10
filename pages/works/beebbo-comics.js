import Layout from "../../components/layout";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

const Beebbo = () => {
  return (
    <Layout>
      <Head>
        <title>Works - Beebbo Comics</title>
      </Head>

      <main>
        <div className={utilStyles.workImageContainer}>
          <Image
            priority
            src="/images/beebbo-comics.png"
            alt="Beebbo Comics"
            layout="fill"
            objectPosition="left"
            objectFit="contain"
          />
        </div>

        <h1 className={utilStyles.workTitle}>Beebbo Comics</h1>
        <h3 className={utilStyles.workTagline}>
          Unlimited Comic Reading Experience
        </h3>
        <div>
          <a href="https://www.beebbo.com?ref=yongky_personal" target="_blank">
            <div className="d-flex-anchor">
              <span className="material-icons">open_in_new</span>
              Visit Site
            </div>
          </a>
        </div>

        <h4>
          Role: Chief Executive Officer (CEO)
          <br />
          (July 2021 - Now)
        </h4>
        <p>
          Beebbo Comics is subscription based comic reading platform. The main
          idea is to bring back true value to web comics community so every
          stakeholder can grow together.
        </p>
      </main>

      <style jsx>{`
        .d-flex-anchor {
          display: flex;
          align-items: center;
        }

        .d-flex-anchor > span {
          font-size: 1em !important;
          margin-right: 3px;
        }

        .d-flex-anchor > span:hover {
          text-decoration: none;
        }
      `}</style>
    </Layout>
  );
};

export default Beebbo;
