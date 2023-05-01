import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const HeadSection = () => {
  return (
    <Head>
      <title>Login Component</title>
      <meta name="description" content="A customized react login form" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    </Head>
  )
}

export default function Home() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  })

  const increment = () => {
    setCount(count + 1);
    setTime(new Date());
  }
  const decrement = () => {
    setCount(count - 1);
    setTime(new Date());
  }

  return (
    <>
      <HeadSection />
      <main className={`${styles.main} ${inter.className}`}>
        <h2>Current Time: {time.toLocaleTimeString()}</h2>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
        <button className="btn btn-danger" onClick={decrement}>Decrement</button>
      </main>
    </>
  )
}
