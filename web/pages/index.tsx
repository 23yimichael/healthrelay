import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HealthRelay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/dashboard">
        <div className="flex h-screen justify-center items-center">
          Click Anywhere Go To Dashboard
        </div>
      </Link>
    </div>
  );
};

export default Home;
