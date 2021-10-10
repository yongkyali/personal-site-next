import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";

export default function InfluencerCart() {
  return (
    <Layout>
      <Head>
        <title>Works - Influencer Cart</title>
      </Head>

      <main>
        <div className={utilStyles.workImageContainer}>
          <Image
            priority
            src="/images/influencer-cart.png"
            alt="Influencer Cart"
            layout="fill"
            objectPosition="left"
            objectFit="contain"
          />
        </div>

        <h1 className={utilStyles.workTitle}>Influencer Cart</h1>
        <h3 className={utilStyles.workTagline}>
          Buy and sell Instagram shoutouts
        </h3>
        <small>Status: Discontinued</small>
        <div>
          <a
            href="https://www.influencer-cart.com?ref=yongky_personal"
            target="_blank"
          >
            <div className="d-flex-anchor">
              <span className="material-icons">open_in_new</span>
              Visit Site
            </div>
          </a>
        </div>

        <h4>
          Role: Chief Executive Officer (CEO)
          <br />
          (January 2021 - July 2021)
        </h4>
        <p>
          Influencer Cart is a platform where you can buy or sell Instagram
          shoutouts (endorsement / paid promotion post). The platform's vision
          is to enable smaller creator to start earning money from doing
          shoutouts, and providing transparent and targeted audience to buyer /
          brands. The majority of it's users are from United States, Europe and
          India.
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
