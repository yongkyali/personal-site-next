import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I’m <strong>Yongky</strong>, currently CEO at Beebbo Comics. I
          started my career as a software engineer and now pursuing
          entreprenurial world.
        </p>
        <p>
          Feel free to connect with me via{" "}
          <a href="https://www.instagram.com/yongkyali">Instagram</a> or via{" "}
          <a href="mailto:yongky@beebbo.com">e-mail</a>.
        </p>

        <p>
          Here are list of my works:
          <ul className={utilStyles.portfolioList}>
            <li>
              <div>
                <Link href="works/beebbo-comics">Beebbo Comics</Link>
                <span className={utilStyles.badge}>current</span>
              </div>
            </li>
            <li>
              <Link href="works/influencer-cart">Influencer Cart</Link>
            </li>
            <li>
              <Link href="works/executive-mafia">Executive Mafia</Link>
            </li>
          </ul>
        </p>
        <i className="cil-energy"></i>

        <p>
          Socials:
          <div className="social-container">
            <a
              className="social-link"
              href="https://github.com/yongkyali"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/images/icons/github.svg"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>
            <a
              className="social-link"
              href="https://instagram.com/yongkyali"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/images/icons/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
              />
            </a>
            <a
              className="social-link"
              href="https://medium.com/@yongkyliee"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/images/icons/medium.svg"
                alt="Medium"
                width={32}
                height={32}
              />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/yongkyali/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/images/icons/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
            <a
              className="social-link"
              href="https://stackoverflow.com/users/7498283/yongky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/images/icons/stackoverflow.svg"
                alt="StackOverflow"
                width={32}
                height={32}
              />
            </a>
          </div>
        </p>
      </section>

      <style jsx>
        {`
          .social-container {
            display: flex;
            padding-top: 0.5em;
          }
          .social-link {
            margin: 0 8px;
          }
          social-link:first-child {
            margin-left: 0;
          }

          social-link:last-child {
            margin-right: 0;
          }

          .mdi,
          .cib {
            font-size: 1.1em;
            color: #031d44;
            transition: all 0.2s ease-in-out;
          }
        `}
      </style>
    </Layout>
  );
}
