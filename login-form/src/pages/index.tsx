import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import picture from "../picture.jpg";
import Image from "next/image";
import Form from "./form";

const inter = Inter({ subsets: ["latin"] });

const HeadSection = () => {
  return (
    <Head>
      <title>Login Component</title>
      <meta name="description" content="A customized react login form" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"
      />
      <script
        async
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      ></script>
    </Head>
  );
};

export default function Home() {
  return (
    <>
      <HeadSection />
      <main className={`${styles.main} ${inter.className}`}>
        <Form />
      </main>
    </>
  );
}
