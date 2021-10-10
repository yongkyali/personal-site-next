import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Yongky Ali";
export const siteTitle = "Home - Yongky Ali";

function Layout(props) {
  const home = props.home;
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Yongky Ali's personal site. An entrepreneur and occasionally a software engineer."
        />
        <meta name="og:title" content={siteTitle} />
        <meta
          name="og:description"
          content="This is personal website of Yongky Ali. Currently CEO at Beebbo Comics, also a software engineer."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-TBFV22X")`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TBFV22X"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>`,
        }}
      ></noscript>

      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{props.children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
