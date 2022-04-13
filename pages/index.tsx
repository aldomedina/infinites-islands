import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollCanvas from "../components/ScrollCanvas";
import s from "./Home.module.scss";

const Home: NextPage = () => {
  const [h, seth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      seth(window.innerHeight);
    }
  }, []);
  return (
    <>
      <Head>
        <title>infinites islands</title>
        <meta name="description" content="Infinite islands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.main}>
        <ScrollCanvas />

        <div className={s.top}>
          <h1 className={s.title}>infinites islands</h1>
        </div>
        <div className={s.bottom}>
          <h2 className={s.subtitle}>
            Generative worlds that come out of the originals{" "}
            <a
              className="link"
              href="https://infinites.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Infinites AI + IRL
            </a>
            .
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
