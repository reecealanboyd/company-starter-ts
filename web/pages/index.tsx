import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ITEM_FEED_QUERY } from "../../shared/hooks/useItemFeed";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data, loading } = useQuery(ITEM_FEED_QUERY);

  if (loading || !data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ width: 300 }}>
          {data.itemFeed.map((item) => (
            <div style={{ display: "flex" }} key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
              <img src={item.imageUrl} />
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
