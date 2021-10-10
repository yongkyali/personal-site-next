import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";

export default function ExecutiveMafia() {
  return (
    <Layout>
      <Head>
        <title>Works - Executive Mafia</title>
      </Head>

      <main>
        <div className={utilStyles.workImageContainer}>
          <Image
            priority
            src="/images/executive-mafia.png"
            alt="Executive Mafia"
            layout="fill"
            objectPosition="left"
            objectFit="contain"
          />
        </div>

        <h1 className={utilStyles.workTitle}>Executive Mafia</h1>
        <h3 className={utilStyles.workTagline}>
          Pods for Instagram Influencers
        </h3>
        <small>Currently: Investor and Commissioner</small>
        <div>
          <a
            href="https://www.executivemafia.com?ref=yongky_personal"
            target="_blank"
          >
            <div className="d-flex-anchor">
              <span className="material-icons">open_in_new</span>
              Visit Site
            </div>
          </a>
        </div>

        <h4>
          Role: Chief Technology Officer (CTO)
          <br />
          (July 2017 - December 2020)
        </h4>
        <p>
          Executive Mafia is a community based pods for Instagram influencers to
          boost their account's follower growth exponentially. We also heavily
          focused on educating newer Influencer how to make a proper portfolio
          and engage with real audiences. By the system we created, we can grow
          an account from 0 to 10K followers in the matter of months without any
          paid promotion.
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
}
