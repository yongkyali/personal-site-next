import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yongky Ali</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          height={144}
          width={144}
          src="/images/profile.jpeg"
          alt="My Profile Picture"
          className="profile-picture"
        />
        <h1 className="title">Yongky Ali</h1>

        <p className="description">
          Hello I’m <strong>Yongky</strong>, currently CEO at Beebbo Comics. I
          started my career as a software engineer and now pursuing
          entreprenurial world.
        </p>
        <p className="description">
          Feel free to connect with me via{" "}
          <a href="https://www.instagram.com/yongkyali">Instagram</a> or via{" "}
          <a href="mailto:yongky@beebbo.com">e-mail</a>.
        </p>

        <div>
          <Link href="works/beebbo-comics">Beebbo Comics</Link>
          <Link href="works/influencer-cart">Influencer Cart</Link>
          <Link href="works/executive-mafia">Executive Mafia</Link>
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 35rem;
          padding: 0 0.5rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .profile-picture {
          border-radius: 100%;
          width: 144px;
          height: 144px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          // color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
